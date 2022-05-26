import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/input/input.component";
import NotesBox from "../../components/notes-box/notes-box.component";
import "./home.css";

const HomeContainer = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index, fullText]);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullText(e.target.value);
  };

  return (
    <div>
      <Input
        onChange={onTextChange}
        value={fullText}
        label="Text"
        placeholder="Enter your text here"
      />
      <NotesBox text={text} fullText={fullText} index={index} />
    </div>
  );
};

export default HomeContainer;
