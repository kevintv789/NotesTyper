import { useCallback, useEffect, useState } from "react";
import { NotesProps } from "../components/notes-box/notes-box.component";

const useTyper = ({ fullText, speed }: NotesProps) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const autoType = useCallback(() => {
    if (index < fullText.length && isPlaying) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, speed);
    }
  }, [index, speed, text, isPlaying, fullText]);

  const playTyping = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIndex(0);
      setText("");
      autoType();
    }
  };

  useEffect(() => {
    autoType();
  }, [autoType]);

  return { playTyping, isPlaying, index, text };
};

export default useTyper;
