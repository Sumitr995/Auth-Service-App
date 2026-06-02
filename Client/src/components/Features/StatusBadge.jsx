import React from 'react'
import { Clock, ShieldCheck, Wrench } from 'lucide-react'

const StatusBadge = ({ status }) => {
  const normalized = String(status || '').toLowerCase()

  const Icon = normalized === 'stable'
    ? ShieldCheck
    : normalized === 'building'
      ? Wrench
      : Clock

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-(--hairline) bg-(--canvas-soft-2) px-3 py-1 text-caption-mono text-(--body)">
      <Icon className="h-4 w-4" strokeWidth={1.8} />
      <span className="text-(--ink)">{status}</span>
    </span>
  )
}

export default StatusBadge
