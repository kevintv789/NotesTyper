import { url } from "inspector";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import sound from "../assets/sounds/typing_sound.mp3";

export const useAudio = () => {
  const [playSound] = useSound(sound, { volume: 0.03 });

  return { playSound };
};
