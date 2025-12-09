import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Tag = 'span' }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&[]{}<>";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Tag className={`relative inline-block ${className} group`}>
      <span className="relative z-10">{displayText}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-green opacity-0 group-hover:opacity-50 group-hover:translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-50 group-hover:-translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
    </Tag>
  );
};

export default GlitchText;