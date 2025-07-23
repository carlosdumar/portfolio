import React, { useState, useEffect } from "react";

interface StreamingTextProps {
  fullText: string;
  delay?: number;
}

const StreamingText = ({ fullText, delay = 40 }: StreamingTextProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText, delay]);

  return <div>{displayedText}</div>;
};

export default StreamingText;
