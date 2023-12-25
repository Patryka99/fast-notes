import { useState } from "react";
import Button from "./Button";

export default function AddTag({ tags, onAddNote, onShowAddNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState(tags[0].tagName);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !text) return;
    const now = new Date();

    const id = crypto.randomUUID();
    const newNote = {
      id,
      title,
      tekst: text,
      createTime: `${now.getHours()}:${now.getMinutes()}`,
      createDate: `${now.toDateString()}`,
      tag: tag,
      done: false,
    };
    onAddNote(newNote);
    onShowAddNote();

    setTitle("");
    setText("");
    setTag(tags[0].tagName);
  }

  return (
    <div className="center">
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label> Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Text:</label>
        <textarea
          rows={9}
          cols={50}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>Tag: </label>
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          {tags.map((t) => (
            <option key={t.id} value={t.tagName}>
              {t.tagName}
            </option>
          ))}
        </select>

        <Button>Add</Button>
      </form>
    </div>
  );
}
