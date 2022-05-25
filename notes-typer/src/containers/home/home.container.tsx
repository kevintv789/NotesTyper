import React, { useEffect, useState } from "react";
import "./home.css";

const HomeContainer = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "HELLO MY NAME IS NOTES TYPER LOL"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index, fullText, index]);

  return (
    <div className="phone-container">
      <div className="text">{text}</div>
    </div>
  );
};

export default HomeContainer;
