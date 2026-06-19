"use client";

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

interface TextSegment {
  text: string;
  isHighlighted: boolean;
}

// Parse HTML text into segments
function parseText(text: string): { segments: TextSegment[], highlightClass: string } {
  const segments: TextSegment[] = [];
  const regex = /<span[^>]*class=['"]([^'"]*)['"][^>]*>(.*?)<\/span>/g;
  let lastIndex = 0;
  let match;
  let highlightClass = 'bg-fuchsia-500/20 px-2 py-1 rounded'; // default class

  while ((match = regex.exec(text)) !== null) {
    // Extract the class from the span
    if (match[1]) {
      highlightClass = match[1];
    }
    
    // Add text before the span
    if (match.index > lastIndex) {
      segments.push({
        text: text.substring(lastIndex, match.index),
        isHighlighted: false
      });
    }
    // Add highlighted text
    segments.push({
      text: match[2],
      isHighlighted: true
    });
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      text: text.substring(lastIndex),
      isHighlighted: false
    });
  }

  // If no spans found, return the whole text
  if (segments.length === 0) {
    segments.push({ text, isHighlighted: false });
  }

  return { segments, highlightClass };
}

export default function TypingAnimation({ 
  text, 
  speed = 50, 
  deleteSpeed = 30,
  pauseTime = 1500,
  className = "" 
}: TypingAnimationProps) {
  const texts = Array.isArray(text) ? text : [text];
  const [displayedLength, setDisplayedLength] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[currentTextIndex];
  const { segments, highlightClass } = parseText(currentText);
  
  // Calculate total visible text length (excluding HTML tags)
  const totalLength = segments.reduce((sum, seg) => sum + seg.text.length, 0);

  useEffect(() => {
    if (!isDeleting && displayedLength < totalLength) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedLength(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedLength === totalLength) {
      // Pause after typing complete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedLength > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedLength(prev => prev - 1);
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedLength === 0) {
      // Move to next text after deleting complete
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [displayedLength, totalLength, speed, deleteSpeed, pauseTime, isDeleting, texts.length]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedLength(0);
    setCurrentTextIndex(0);
    setIsDeleting(false);
  }, [text]);

  // Render text based on displayed length
  const renderText = () => {
    let currentLength = 0;
    return segments.map((segment, segIndex) => {
      const segmentStart = currentLength;
      const segmentEnd = currentLength + segment.text.length;
      const isVisible = displayedLength > segmentStart;
      const visibleLength = Math.max(0, Math.min(displayedLength - segmentStart, segment.text.length));
      
      currentLength = segmentEnd;
      
      if (visibleLength === 0 && !isVisible) {
        return null;
      }

      const visibleText = segment.text.substring(0, visibleLength);
      
      if (segment.isHighlighted) {
        return (
          <span key={segIndex} className={`${highlightClass} inline-block`}>
            {visibleText}
          </span>
        );
      }
      
      return <span key={segIndex} className="inline-block">{visibleText}</span>;
    });
  };

  return (
    <span className={className}>
      {renderText()}
      <span className="animate-pulse text-fuchsia-500">|</span>
    </span>
  );
}

