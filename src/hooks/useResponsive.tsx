import { useEffect, useState } from "react";

type ResponsiveReturnTypes = "Mobile" | "Tablet" | "Desktop"

export function useResponsive() : ResponsiveReturnTypes {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  },[])

  if(width < 768){
    return "Mobile"
  }

  if(width >= 768 && width <= 1024){
    return "Tablet"
  }
  else {
    return "Desktop"
  }
}