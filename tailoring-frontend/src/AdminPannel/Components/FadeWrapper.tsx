import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  closing: boolean;
  duration?: number;
}

const FadeWrapper = ({ children, onClose, closing, duration = 400 }: Props) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        setShouldRender(false);
        onClose();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [closing, onClose, duration]);

  if (!shouldRender) return null;

  return (
    <div className="popup-overlay">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default FadeWrapper;
