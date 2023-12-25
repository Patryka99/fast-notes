import Button2 from "./Button2";

export default function Note({
  note,
  color,
  onDeleteNote,
  onToggleNote,
  onSelectNote,
}) {
  const maxStringLength = 350;
  const maxTitleLen = 18;
  return (
    <div
      className={`note ${note.done && "done"}`}
      style={{ backgroundColor: color }}
    >
      <div className="note-sides">
        <div className="left">
          <input
            type="checkbox"
            className="note-check"
            style={{ accentColor: color }}
            value={note.done}
            onChange={() => onToggleNote(note.id)}
          />
          <label className="title">
            {note.title.length > maxTitleLen
              ? `${note.title.substring(0, maxTitleLen)}...`
              : note.title}
          </label>
        </div>
        <div className="right">
          <Button2 Color={color}>{note.tag}</Button2>
          <Button2 Color="red" onClick={() => onDeleteNote(note)}>
            Delete
          </Button2>
        </div>
      </div>
      <div
        className="note-tekst"
        style={{ cursor: "pointer" }}
        onClick={() => onSelectNote(note)}
      >
        {note.tekst.length > maxStringLength
          ? `${note.tekst.substring(0, maxStringLength)}...`
          : note.tekst}
      </div>
      <div className="note-sides">
        <div className="left date">{note.createTime}</div>
        <div className="right date">{note.createDate}</div>
      </div>
    </div>
  );
}
