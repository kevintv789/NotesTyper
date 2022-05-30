import React, { useState } from "react";
import ffmpeg from "react-ffmpeg";

type VideoFormat = "mp4" | "api";

export interface ConvertedVideo {
  name: string;
  format: VideoFormat;
  data: string;
}

const useVideoConvert = () => {
  const convertVideo = async (blob: Blob) => {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      await ffmpeg.process(
        blob,
        '-metadata location="" -metadata location-eng="" -metadata author="" -c:v copy -c:a copy',
        (e: any) => {
          console.log(e);
        }
      );
    } catch (e) {
      console.log("Error occurred while converting : ", e);
    }
  };

  return { convertVideo };
};

export default useVideoConvert;
