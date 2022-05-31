import { ChangeEvent, useState } from "react";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import NotesBox from "../../components/notes-box/notes-box.component";
import "./home.css";
import {
  faDownload,
  faRotateLeft,
  faPlay,
  faStop,
  faVideo,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import useTyper from "../../hooks/useTyper";
import useMedia from "../../hooks/useMedia";

const HomeContainer = () => {
  const [fullText, setFullText] = useState("");
  const [speed, setSpeed] = useState<number>(80);

  const { playTyping, isPlaying, index, text } = useTyper({ fullText, speed });
  const {
    onStopRecording,
    onStartRecording,
    viewRecording,
    downloadVideo,
    timeStamp,
    status,
  } = useMedia();

  const onTextChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setFullText(e.target.value);
  };

  return (
    <div>
      <div className="main-input-container">
        <div className="top-btn-container">
          <Button
            label={
              status === "recording" ? "Stop Recording" : "Start Recording"
            }
            className="top-btn"
            icon={status === "recording" ? faStop : faVideo}
            onClick={
              status === "recording" ? onStopRecording : onStartRecording
            }
          />
          <Button
            label={isPlaying ? "Replay" : "Play"}
            className="top-btn"
            icon={isPlaying ? faArrowRotateLeft : faPlay}
            onClick={playTyping}
          />
        </div>
        <Input
          type="textarea"
          onChange={onTextChange}
          value={fullText}
          label="Text"
          placeholder="Enter your text here"
          className="text-input-container"
        />

        <Input
          type="input"
          onChange={(
            e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
          ) => setSpeed(Number(e.target.value))}
          value={speed}
          label="Speed (ms)"
          placeholder="300ms"
          className="text-input-container"
        />
      </div>

      <div className="button-container">
        {timeStamp > 0 && (
          <>
            <Button
              label="View Recording"
              className="replay-btn"
              icon={faRotateLeft}
              onClick={viewRecording}
            />
            <Button
              label="Download"
              icon={faDownload}
              onClick={downloadVideo}
            />
          </>
        )}
      </div>

      <NotesBox fullText={fullText} index={index} text={text} />
    </div>
  );
};

export default HomeContainer;
