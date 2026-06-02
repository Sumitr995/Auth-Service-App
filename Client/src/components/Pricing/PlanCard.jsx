import React from 'react'

const PlanCard = ({
  Icon,
  name,
  price,
  tagline,
  features,
  ctaLabel,
  onCta,
  BulletIcon,
  bulletIconClassName = 'mt-0.5 h-4 w-4 text-(--link-blue)',
}) => {
  return (
    <div className="card-marketing micro-lift micro-border micro-group p-10">
      <div className="micro-icon grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
        <Icon className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
      </div>
      <div className="mt-6 text-display-md text-(--ink)">{name}</div>
      <div className="mt-2 text-body-lg text-(--ink)">{price}</div>
      <div className="mt-1 text-body-sm text-(--body)">{tagline}</div>

      <ul className="mt-8 space-y-2">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2 text-body-sm text-(--body)">
            {BulletIcon ? (
              <BulletIcon className={bulletIconClassName} strokeWidth={1.8} />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--mute)" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="button-secondary cursor-pointer mt-10 w-full"
        onClick={onCta}
      >
        {ctaLabel}
      </button>
    </div>
  )
}

export default PlanCard
