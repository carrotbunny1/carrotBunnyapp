"use client";

import React from 'react';

// A minimal motion implementation for subtle animations
// This avoids installing framer-motion as a dependency

type MotionProps = {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children?: React.ReactNode;
  className?: string;
};

export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps>(({ initial, animate, transition, children, className }, ref) => {
    const elementRef = React.useRef<HTMLDivElement>(null);
    const actualRef = (ref as React.RefObject<HTMLDivElement>) || elementRef;
    
    React.useEffect(() => {
      if (actualRef.current && animate) {
        const element = actualRef.current;
        const duration = transition?.duration || 0.3;
        const delay = transition?.delay || 0;
        
        // Apply initial styles
        if (initial) {
          Object.entries(initial).forEach(([key, value]) => {
            if (key === 'opacity') {
              element.style.opacity = String(value);
            } else if (key === 'x') {
              element.style.transform = `translateX(${value}px)`;
            } else if (key === 'y') {
              element.style.transform = `translateY(${value}px)`;
            } else if (key === 'scale') {
              element.style.transform = `scale(${value})`;
            }
          });
        }
        
        // Apply transition
        element.style.transition = `all ${duration}s ease-in-out ${delay}s`;
        
        // Apply animation after a small delay to ensure initial styles are applied
        setTimeout(() => {
          if (animate) {
            Object.entries(animate).forEach(([key, value]) => {
              if (key === 'opacity') {
                element.style.opacity = String(value);
              } else if (key === 'x') {
                element.style.transform = `translateX(${value}px)`;
              } else if (key === 'y') {
                element.style.transform = `translateY(${value}px)`;
              } else if (key === 'scale') {
                element.style.transform = `scale(${value})`;
              }
            });
          }
        }, 10);
      }
    }, [initial, animate, transition, actualRef]);
    
    return (
      <div ref={actualRef} className={className}>
        {children}
      </div>
    );
  })
};


motion.div.displayName = 'MotionDiv';