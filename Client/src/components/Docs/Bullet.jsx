import React from 'react'

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3 text-body-sm text-(--body)">
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--mute)" />
    <span>{children}</span>
  </div>
)

export default Bullet
