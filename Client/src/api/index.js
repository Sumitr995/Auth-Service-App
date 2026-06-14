import axios from 'axios';

const PROD_URL = 'https://sumitr995-auth-backend.vercel.app/api';
const LOCAL_URL = 'http://localhost:3000/api';

// Initial baseURL based on environment
const initialBaseURL = import.meta.env.MODE === 'development' ? LOCAL_URL : PROD_URL;

const api = axios.create({
    baseURL: initialBaseURL,
    withCredentials: true
});

let hasSwitchedToProd = false;

// Interceptor to handle automatic fallback from localhost to production
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Check if it's a network error (no response) and we are currently hitting localhost
        if (
            import.meta.env.MODE === 'development' &&
            !hasSwitchedToProd &&
            !error.response && 
            api.defaults.baseURL === LOCAL_URL
        ) {
            hasSwitchedToProd = true;
            console.warn("Local server not reachable, falling back to production API:", PROD_URL);
            
            // Update the instance baseURL for future requests
            api.defaults.baseURL = PROD_URL;
            
            // Update the current request and retry
            originalRequest.baseURL = PROD_URL;
            
            // If the URL was absolute and contained LOCAL_URL, replace it
            if (originalRequest.url && originalRequest.url.includes(LOCAL_URL)) {
                originalRequest.url = originalRequest.url.replace(LOCAL_URL, PROD_URL);
            }

            return api(originalRequest);
        }

        return Promise.reject(error);
    }
);

export default api;
