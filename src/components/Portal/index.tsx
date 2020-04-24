import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const Portal: React.FC = ({ children }) => {
  const element = useRef(document.createElement("div"));

  useEffect(() => {
    const portalRoot = document.getElementById("portal");
    const { current } = element;

    portalRoot?.appendChild(current);

    return () => {
      portalRoot?.removeChild(current);
    };
  }, []);

  return createPortal(children, element.current);
};

export default Portal;
