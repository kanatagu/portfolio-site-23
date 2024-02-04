'use client'
import { motion } from 'framer-motion'

type ItemAnimationProps = {
  children: React.ReactNode
  className?: string
}

export const ItemAnimation = ({
  children,
  className,
  ...rest
}: ItemAnimationProps) => {
  const itemAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <motion.div
      className={className}
      transition={{ duration: 0.3 }}
      variants={itemAnimation}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
