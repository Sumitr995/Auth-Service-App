const EMAIL_STYLES = `
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f9fafb; }
    .container { max-width: 600px; margin: 40px auto; padding: 40px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .logo { margin-bottom: 32px; text-align: center; }
    .logo-text { font-size: 24px; font-weight: 800; letter-spacing: -0.025em; color: #000; }
    .title { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px; text-align: center; }
    .text { font-size: 16px; color: #4b5563; margin-bottom: 24px; text-align: center; }
    .otp-container { background-color: #f3f4f6; border-radius: 8px; padding: 24px; margin-bottom: 32px; text-align: center; border: 1px dashed #d1d5db; }
    .otp-code { font-family: 'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 36px; font-weight: 700; letter-spacing: 0.25em; color: #4f46e5; margin: 0; }
    .footer { margin-top: 40px; text-align: center; font-size: 14px; color: #9ca3af; }
    .footer a { color: #4f46e5; text-decoration: none; }
    .button { display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 16px; }
`;

export const getOtpTemplate = (otp, title, subtitle) => `
<!DOCTYPE html>
<html>
<head>
    <style>${EMAIL_STYLES}</style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <span class="logo-text">AUTH SERVICE</span>
        </div>
        <h1 class="title">${title}</h1>
        <p class="text">${subtitle}</p>
        <div class="otp-container">
            <h2 class="otp-code">${otp}</h2>
        </div>
        <p class="text" style="font-size: 14px;">This code will expire in 15 minutes. If you didn't request this code, you can safely ignore this email.</p>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Auth Service App. Built for developers.
            <br>
            <a href="https://auth.sumitr995.me">Dashboard</a> &bull; <a href="https://auth.sumitr995.me/docs">Documentation</a>
        </div>
    </div>
</body>
</html>
`;

export const getWelcomeTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
    <style>${EMAIL_STYLES}</style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <span class="logo-text">AUTH SERVICE</span>
        </div>
        <h1 class="title">Welcome, ${name}!</h1>
        <p class="text">We're excited to have you on board. Our platform provides everything you need to build secure authentication for your applications.</p>
        <div style="text-align: center;">
            <a href="https://auth.sumitr995.me/dashboard" class="button">Go to Dashboard</a>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Auth Service App. Built for developers.
            <br>
            <a href="https://auth.sumitr995.me">Dashboard</a> &bull; <a href="https://auth.sumitr995.me/docs">Documentation</a>
        </div>
    </div>
</body>
</html>
`;

export const getGeneralTemplate = (title, message) => `
<!DOCTYPE html>
<html>
<head>
    <style>${EMAIL_STYLES}</style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <span class="logo-text">AUTH SERVICE</span>
        </div>
        <h1 class="title">${title}</h1>
        <p class="text">${message}</p>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Auth Service App. Built for developers.
            <br>
            <a href="https://auth.sumitr995.me">Dashboard</a> &bull; <a href="https://auth.sumitr995.me/docs">Documentation</a>
        </div>
    </div>
</body>
</html>
`;
