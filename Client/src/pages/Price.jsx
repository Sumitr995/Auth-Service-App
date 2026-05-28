import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import PlanCard from '@/components/Pricing/PlanCard'
import { Check, KeyRound, ShieldCheck, Users } from 'lucide-react'

const Price = ({ Sign, setSign }) => {
	const navigate = useNavigate()

	return (
		<div className="min-h-screen pt-16 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
			<Navbar Sign={Sign} setSign={setSign} />

			<main>
				{/* Hero */}
				<section className="relative overflow-hidden px-6 pt-20 pb-20">
					<div
						aria-hidden="true"
						className="mesh-gradient-hero pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[min(1000px,100%)] -translate-x-1/2"
					/>

					<div className="relative mx-auto max-w-[1200px]">
						<div className="inline-flex items-center gap-2 rounded-full border border-(--hairline) bg-(--canvas) px-3 py-1 shadow-sm">
							<span className="flex h-2 w-2 rounded-full bg-(--link-blue) animate-pulse" />
							<span className="text-caption-mono text-(--body) uppercase tracking-widest">
								Pricing • V1 • Developer dashboard + API key platform
							</span>
						</div>

						<h1 className="mt-10 text-display-xl text-(--ink) max-w-[900px]">Simple pricing for V1.</h1>
						<p className="mt-6 text-body-lg text-(--body) max-w-[760px]">
							Choose a plan to demo the SaaS experience today. Advanced enterprise add-ons (OAuth, MFA, orgs, SDKs)
							arrive later.
						</p>

						<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
							<button
								type="button"
								className="button-primary cursor-pointer px-10 shadow-lg shadow-black/5"
								onClick={() => {
									navigate('/register')
									setSign('Sign Up')
								}}
							>
								Start for Free
							</button>
							<button
								type="button"
								className="button-secondary cursor-pointer px-10"
								onClick={() => navigate('/docs')}
							>
								Read Docs
							</button>
						</div>
					</div>
				</section>

				{/* Plans */}
				<section className="px-6 pb-28">
					<div className="mx-auto max-w-[1200px]">
						<div className="text-center">
							<div className="text-caption-mono text-(--mute) uppercase tracking-widest">Plans</div>
							<h2 className="mt-3 text-display-lg text-(--ink)">Pick your starting point.</h2>
							<p className="mt-4 text-body-sm text-(--body) max-w-[760px] mx-auto">
								V1 pricing is intentionally straightforward. Upgrade paths will expand as the platform evolves.
							</p>
						</div>

						<div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
							{/* Starter */}
							<PlanCard
								Icon={KeyRound}
								name="Starter"
								price="$0"
								tagline="For demos and prototypes."
								BulletIcon={Check}
								features={[
									'Developer dashboard access',
									'API key generation',
									'Developer-scoped users (V1)',
								]}
								ctaLabel="Get started"
								onCta={() => navigate('/register')}
							/>

							{/* Pro (featured) */}
							<div className="micro-lift micro-border micro-group rounded-[min(var(--radius-lg),12px)] border border-(--hairline) bg-(--ink) text-(--on-primary) overflow-hidden">
								<div className="gradient-accent" />
								<div className="p-10">
									<div className="micro-icon grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas)/10">
										<ShieldCheck className="h-5 w-5 text-(--on-primary)" strokeWidth={1.8} />
									</div>
									<div className="mt-6 text-display-md">Pro</div>
									<div className="mt-2 text-body-lg">$19</div>
									<div className="mt-1 text-body-sm opacity-80">For shipping V1 in production.</div>

									<ul className="mt-8 space-y-2">
										{[
											'Everything in Starter',
											'Session visibility in dashboard',
											'Priority for API key rotation UX',
										].map((item) => (
										<li key={item} className="flex items-start gap-2 text-body-sm opacity-90">
												<Check className="mt-0.5 h-4 w-4" strokeWidth={1.8} />
											<span>{item}</span>
										</li>
									))}
									</ul>

									<button
										type="button"
										className="button-secondary cursor-pointer mt-10 w-full"
										onClick={() => navigate('/register')}
									>
										Start Pro
									</button>
								</div>
							</div>

							{/* Team */}
							<PlanCard
								Icon={Users}
								name="Team"
								price="$49"
								tagline="For small teams building internal tools."
								BulletIcon={Check}
								features={[
									'Everything in Pro',
									'Collaboration-ready dashboard UX',
									'Future orgs/roles upgrade path',
								]}
								ctaLabel="Contact"
								onCta={() => navigate('/register')}
							/>
						</div>
					</div>
				</section>
			</main>

			<Footer
				githubUrl="https://github.com/Sumitr995"
				linkedinUrl="https://www.linkedin.com/in/sumitr995"
				portfolioUrl="https://sumitr995.me"
				email="itzsumitr995@gmail.com"
			/>
		</div>
	)
}

export default Price
