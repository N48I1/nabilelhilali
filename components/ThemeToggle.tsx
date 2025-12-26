import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.documentElement.classList.add('light');
        } else {
            setIsDark(true);
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-colors"
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <Sun size={16} className="text-amber-400" />
            ) : (
                <Moon size={16} className="text-indigo-400" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
