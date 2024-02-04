'use client'
import { motion } from 'framer-motion'

type ItemContainerAnimationProps = {
  children: React.ReactNode
  className?: string
}
export const ItemContainerAnimation = ({
  children,
  className
}: ItemContainerAnimationProps) => {
  const containerAnimation = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={containerAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
