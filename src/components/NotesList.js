import Note from "./Note";

export default function NotesList({
  notes,
  tags,
  onDeleteNote,
  onToggleNote,
  onSelectNote,
}) {
  return (
    <div className="notes-list">
      {notes.map((n) => (
        <Note
          onSelectNote={onSelectNote}
          onToggleNote={onToggleNote}
          onDeleteNote={onDeleteNote}
          key={n.id}
          note={n}
          color={tags.filter(({ tagName }) => tagName === n.tag)[0].color}
        />
      ))}
    </div>
  );
}
