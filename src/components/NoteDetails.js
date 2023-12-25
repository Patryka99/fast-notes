import Button from "./Button";
import React from "react";

export default function NoteDetails({ note, color, onSelectNote }) {
  return (
    <div
      className="center"
      style={{
        color: "#fff",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "50px",
        boxShadow: `inset 0px 0px 10px 5px ${color}`,
      }}
    >
      <p className="details-title">{note.title}</p>
      <p className="details-tekst">{note.tekst}</p>
      <p className="details-info">
        {note.createTime}:{note.createDate}
      </p>
      <Button onClick={() => onSelectNote(note)}>Back</Button>
    </div>
  );
}
