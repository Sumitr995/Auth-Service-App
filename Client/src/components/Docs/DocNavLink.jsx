import React from 'react'

const DocNavLink = ({ id, label, Icon, active = false }) => {
  return (
    <a
      href={`#${id}`}
      aria-current={active ? 'page' : undefined}
      className={[
        'micro-row group flex items-center gap-3 rounded-lg px-3 py-2 text-body-sm transition-colors',
        active
          ? 'bg-(--canvas) text-(--ink) border border-(--hairline)'
          : 'text-(--body) hover:text-(--ink)',
      ].join(' ')}
    >
      <span className="grid h-8 w-8 place-items-center rounded-md border border-(--hairline) bg-(--canvas-soft-2)">
        <Icon className="h-4 w-4 text-(--ink)" strokeWidth={1.8} />
      </span>
      <span className="truncate">{label}</span>
    </a>
  )
}

export default DocNavLink
