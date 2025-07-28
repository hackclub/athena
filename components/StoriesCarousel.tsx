'use client'
import React, { useState, useEffect } from 'react'
import Story from './Story'

interface CardProps {
  [key: string]: any;
}

interface CarouselProps {
  cards: CardProps[];
  className?: string;
}

function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
}

export default function Carousel({ cards, className }: CarouselProps) {
  const [speed, setSpeed] = useState(5)
  const [isPaused, setIsPaused] = useState(false)
  const isVisible = usePageVisibility()
  
  const animationDuration = `${40 - (speed * 6)}s`

  return (
    <>
      {isVisible && (
        <div className={`overflow-hidden ${className}`}>
          <div className="relative">
            <div
              className="flex py-4 md:py-5 lg:py-5"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                animation: `infiniteScroll ${animationDuration} linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {/* First set of cards */}
              {cards.map((card, idx) => (
                <div key={`first-${idx}`} className="flex-shrink-0">
                  <Story
                    title={card.title}
                    description={card.description}
                    image={card.imageUrl}
                    link={'/stories'}
                    author={card.author}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {cards.map((card, idx) => (
                <div key={`second-${idx}`} className="flex-shrink-0">
                  <Story
                    title={card.title}
                    description={card.description}
                    image={card.imageUrl}
                    link={'/stories'}
                    author={card.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}