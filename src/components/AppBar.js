import { useState } from "react";
import Button from "./Button";

export default function AppBar({ OnShowAddNote, showAddNote, resetSite }) {
  const [showSearch, setShowSearch] = useState(false);

  function handleShowSearch() {
    setShowSearch((s) => !s);
  }

  return (
    <div className="app-bar">
      <p onClick={resetSite} className="logo">
        Fast Notes
      </p>
      <p className="tekst"> All Notes</p>
      {showSearch ? (
        <>
          <input class="search-field" type="text" placeholder="Search" />
          <p style={{ cursor: "pointer" }} onClick={handleShowSearch}>
            ✖
          </p>
        </>
      ) : (
        <>
          <img
            src="https://iili.io/JR9bv8Q.md.png"
            alt="search"
            onClick={handleShowSearch}
          />
          <p>.</p>
        </>
      )}
      <Button onClick={OnShowAddNote}>
        {showAddNote ? "Cancel" : "Add new note"}
      </Button>
    </div>
  );
}
