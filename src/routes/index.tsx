import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';

export const Route = createFileRoute('/')({
    component: App,
});

function App() {
    return (
        <div className=''>
            <motion.input type='text' placeholder='Hello' className='input' />
        </div>
    );
}
