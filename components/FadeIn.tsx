'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
}: {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}) {
    const offsets = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: {},
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...offsets[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}
