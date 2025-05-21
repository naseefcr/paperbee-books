// src/components/admin/AdminMetricCard.tsx
'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AdminMetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: number
  delay?: number
  colorClass?: string
  onClick?: () => void
}

export default function AdminMetricCard({
  title,
  value,
  icon: Icon,
  trend,
  delay = 0,
  colorClass = 'bg-primaryAction',
  onClick
}: AdminMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className={`bg-white rounded-lg shadow-sm p-6 ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${colorClass} bg-opacity-10 flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${colorClass}`} />
        </div>
        {trend !== undefined && (
          <div className={`text-sm flex items-center ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <span>{trend >= 0 ? '+' : ''}{trend}%</span>
          </div>
        )}
      </div>
      <div className="text-sm text-secondaryText mb-1">{title}</div>
      <div className="text-2xl font-bold text-mainText">{value}</div>
    </motion.div>
  )
}