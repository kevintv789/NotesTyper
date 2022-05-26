import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./notes-box.css";
import { faChevronLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

type NotesProps = {
  text: string;
  fullText: string;
  index: number;
};

const NotesBox: React.FC<NotesProps> = ({ text, fullText, index }) => {
  useEffect(() => {
    var destination = document.getElementById("text");
    if (destination) {
      destination.innerHTML =
        fullText.substring(0, index + 1) +
        " <div class='blinking-line v-line' />";
    }
  }, [index]);

  return (
    <div className="notes-container">
      <div className="notes-header">
        <div className="display-flex">
          <FontAwesomeIcon icon={faChevronLeft} color="#fcd147" fontSize={18} />
          <div className="notes-back">Notes</div>
        </div>

        <div className="display-flex">
          <FontAwesomeIcon
            icon={faEllipsis}
            color="#fcd147"
            fontSize={18}
            className="ellipsis"
          />
          <div className="notes-done">Done</div>
        </div>
      </div>

      <div className="text-container">
        <div className="text-wrapper" id="text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default NotesBox;
