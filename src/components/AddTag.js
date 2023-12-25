import { useState } from "react";
import Button from "./Button";

export default function AddTag({ onAddTag, onShowAddTag }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const id = crypto.randomUUID();
    const newTag = {
      id,
      tagName: name,
      color,
    };
    onAddTag(newTag);
    onShowAddTag();

    setName("");
    setColor("#000000");
  }

  return (
    <div className="center">
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label> Tag name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </div>
  );
}
