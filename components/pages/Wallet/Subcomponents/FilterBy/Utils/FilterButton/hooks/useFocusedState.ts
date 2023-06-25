import { RefObject, useEffect, useState } from "react";

/**
 * @param ref useRef of filter options
 * @returns filter options focuesd state
 */
const useFocusedState = (ref: RefObject<HTMLDivElement>) => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  /* Event listener for listen outside click of an opened filter dialogue */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return {
    isFocused,
    toggleFocus,
  };
};

export { useFocusedState };
