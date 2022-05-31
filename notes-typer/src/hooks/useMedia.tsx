import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const useMedia = () => {
  const [timeStamp, setTimeStamp] = useState(0);

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      screen: true,
      audio: false,
      video: false,
      blobPropertyBag: { type: "video/webm" },
    });

  const onStartRecording = () => {
    startRecording();
  };

  const onStopRecording = () => {
    const currentTime = new Date().getTime();
    setTimeStamp(currentTime);
    stopRecording();
  };

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

  return { onStartRecording, onStopRecording, viewRecording, downloadVideo, timeStamp, status };
};

export default useMedia;
