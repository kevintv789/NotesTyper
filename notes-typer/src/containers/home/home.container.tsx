import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import NotesBox from "../../components/notes-box/notes-box.component";
import "./home.css";
import {
  faDownload,
  faRotateLeft,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { useReactMediaRecorder } from "react-media-recorder";
import useVideoConvert, { ConvertedVideo } from "../../hooks/useVideoConvert";

const HomeContainer = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState<number>(80);
  const [isResetting, setIsResetting] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);

  const { convertVideo } = useVideoConvert();

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      screen: true,
      audio: false,
      video: false,
      blobPropertyBag: { type: "video/webm" },
      //   mediaRecorderOptions: { mimeType: "video/webm;codecs=H264" },
    });

  useEffect(() => {
    if (index < fullText.length && !isResetting) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, speed);
    }
  }, [index, fullText, isResetting, speed, text]);

  const viewRecording = () => {
    const replay = window.open(mediaBlobUrl, "_blank");
    if (replay) {
      replay.focus();
    }
  };

  const downloadVideo = async () => {
    const sourceName = `screen_record_${timeStamp}.webm`;

    try {
      if (mediaBlobUrl) {
        const link = document.createElement("a");
        link.href = mediaBlobUrl;
        link.download = sourceName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onTextChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setIsResetting(true);
    setIndex(0);
    setFullText(e.target.value);
    setIsResetting(false);
  };

  const onStartRecording = () => {
    startRecording();
  };

  const onStopRecording = () => {
    const currentTime = new Date().getTime();
    setTimeStamp(currentTime);
    stopRecording();
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
            icon={status === "recording" ? faStop : faPlay}
            onClick={
              status === "recording" ? onStopRecording : onStartRecording
            }
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

      <NotesBox text={text} fullText={fullText} index={index} />
    </div>
  );
};

export default HomeContainer;
