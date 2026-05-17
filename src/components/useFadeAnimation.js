import { useState } from "react";

export default () => {
  const [opacity, setOpacity] = useState(0);

  const fadeIn = (count) => {
    if (count >= 1) {
      return;
    } else {
      count += 0.1;
      setOpacity(count);
      setTimeout(() => {
        fadeIn(count);
      }, 50);
    }
  };
  const reset = () => {
    setOpacity(0);
  };
  return [opacity, fadeIn, reset];
};
