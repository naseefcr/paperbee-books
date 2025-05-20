// components/StatsSection.tsx
'use client'
import { motion } from 'framer-motion'
import { BookOpen, Globe, Users, Award } from 'lucide-react'

const stats = [
  {
    icon: BookOpen,
    value: '28',
    label: 'Books Published',
    color: 'text-secondaryButtonIcon',
  },
  {
    icon: Globe,
    value: '5',
    label: 'Languages',
    color: 'text-accentHighlight',
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Happy Readers',
    color: 'text-primaryAction',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Awards Won',
    color: 'text-secondaryButtonIcon',
  },
]

const StatsSection = () => {
  return (
    <section className="py-16 bg-headerNavigation text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-4 rounded-full bg-white/10 ${stat.color} mb-4`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-accentHighlight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection