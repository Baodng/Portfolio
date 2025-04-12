import { useEffect, useState } from "react";

const ScrollPage = () => {
    const [rotate, setRotate] = useState<Boolean>(true);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setRotate(false);
            document.body.style.overflow = "auto";
          } else {
            setRotate(true);
            document.body.style.overflow = "hidden";
          }
        };
        handleResize(); // Call on initial load
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
}
export default ScrollPage