import { useState, useEffect } from 'react';

const useResponsive = (initialWidth, initialHeight, minWidth = 0, minHeight = 0) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const widthRatio = window.innerWidth * 1.0 / initialWidth;
  const heightRatio = window.innerHeight * 1.0 / initialHeight;
  
  const resize = () => {
    setWidth(Math.max(window.innerWidth * 1.0 / widthRatio, minWidth));
    setHeight(Math.max(window.innerHeight * 1.0 / heightRatio, minHeight));
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return [width, height];
};

export default useResponsive;
