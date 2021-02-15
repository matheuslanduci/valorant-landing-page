import { useEffect, useRef, useState } from "react";

type Callback = () => void;

export function useComponentVisibility(
  initialState?: boolean,
  callback?: Callback
) {
  const [isVisible, setIsVisible] = useState<boolean>(initialState || false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false);
      if (callback) {
        callback();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isVisible, setIsVisible };
}
