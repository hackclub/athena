'use client'
import React, { useState } from 'react'
import PageVisibility from 'react-page-visibility'
import Story from './Story'

interface CardProps {
  [key: string]: any;
}

interface CarouselProps {
  cards: CardProps[];
  className?: string;
}

export default function Carousel({ cards, className }: CarouselProps) {
  const [speed, setSpeed] = useState(5)
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  
  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible)
  }

  const animationDuration = `${40 - (speed * 6)}s`

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <div className={`overflow-hidden ${className}`}>
          <div className="relative">
            <div
              className="flex py-4 md:py-5 lg:py-5 animate-scroll"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                animation: `scroll ${animationDuration} linear infinite`,
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
          
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              animation-name: scroll;
            }
          `}</style>
        </div>
      )}
    </PageVisibility>
  )
}