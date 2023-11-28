import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    children?: React.ReactNode
}

export default function TransitionTab({ children }: Props) {
    return (
        <motion.div
            transition={{ delay: 0.1, duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}