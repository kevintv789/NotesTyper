import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import NotesBox from "../../components/notes-box/notes-box.component";
import "./home.css";
import { faDownload, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const HomeContainer = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState<number>(40);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (index < fullText.length && !isResetting) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, speed);
    }
  }, [index, fullText, isResetting]);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsResetting(true);
    setIndex(0);
    setFullText(e.target.value);
    setIsResetting(false);
  };

  const onReplayClick = () => {
    setIsResetting(true);
    setIndex(0);
    setIsResetting(false);
  };

  return (
    <div>
      <div className="button-container">
        <Button
          label="Replay"
          className="replay-btn"
          icon={faRotateLeft}
          onClick={onReplayClick}
        />
        <Button label="Download" icon={faDownload} onClick={() => null} />
      </div>

      <div className="main-input-container">
        <Input
          onChange={onTextChange}
          value={fullText}
          label="Text"
          placeholder="Enter your text here"
          className="text-input-container"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSpeed(Number(e.target.value))
          }
          value={speed}
          label="Speed"
          placeholder="300ms"
          className="text-input-container"
        />
      </div>

      <NotesBox text={text} fullText={fullText} index={index} />
    </div>
  );
};

export default HomeContainer;
