import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [showTopNav, setShowTopNav] = useState<boolean>(true);
  const [lastScrollPos, setLastScrollPos] = useState<number>(0);

useEffect(() => {
  const handleScroll = () =>{
    const currScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(currScrollPos - lastScrollPos) < 50) {
      return;
    }

    setShowTopNav(currScrollPos < lastScrollPos);
    setLastScrollPos(currScrollPos);
  }

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);

});

  return showTopNav;
}

export default useScrollPosition;
