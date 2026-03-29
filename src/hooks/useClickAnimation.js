import { useState } from 'react';

const useClickAnimation = (onComplete, delay = 300) => {
  const [buttonScale, setButtonScale] = useState({});

  const handleClickAnimation = async (key) => {
    setButtonScale(prev => ({ ...prev, [key]: 0.9 }));
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    setButtonScale(prev => ({ ...prev, [key]: 1 }));
    
    if (onComplete) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      onComplete(key);
    }
  };

  const setScale = (key, value) => {
    setButtonScale(prev => ({ ...prev, [key]: value }));
  };

  return { buttonScale,setScale, handleClickAnimation };
};

export default useClickAnimation;
