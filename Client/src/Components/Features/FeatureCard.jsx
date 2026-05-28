import React from 'react'

const FeatureCard = ({ title, description, Icon, points, BulletIcon }) => {
  return (
    <div className="card-marketing micro-lift micro-border micro-group p-8">
      <div className="micro-icon grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
        {React.createElement(Icon, {
          className: 'h-5 w-5 text-(--ink)',
          strokeWidth: 1.8,
        })}
      </div>

      <h3 className="mt-6 text-display-sm text-(--ink)">{title}</h3>
      <p className="mt-3 text-body-sm text-(--body)">{description}</p>

      <ul className="mt-6 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-body-sm text-(--body)">
            {BulletIcon ? (
              <BulletIcon className="mt-0.5 h-4 w-4 text-(--link-blue)" strokeWidth={1.8} />
            ) : null}
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeatureCard
