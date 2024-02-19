import { useState, useEffect } from "react";
const Typewriter = ({ text, speed }) => {
  const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);

    return displayText;
  };
  const displayText = useTypewriter(text, speed);

  return <p className=" text-7xl font-bold  font">{displayText}</p>;
};

export default Typewriter;
