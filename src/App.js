import { useState } from "react";
import AppBar from "./components/AppBar";
import NotesList from "./components/NotesList";
import TagsMenu from "./components/TagsMenu";
import AddTag from "./components/AddTag";
import AddNote from "./components/AddNote";
import NoteDetails from "./components/NoteDetails";

const initialTags = [
  {
    id: 118836,
    tagName: "Videos",
    color: "#eaff67",
  },
  {
    id: 1237643,
    tagName: "Todo",
    color: "#ffaac2",
  },
  {
    id: 563271,
    tagName: "Home",
    color: "#affab2",
  },
];

const initialNotes = [
  {
    id: 258734,
    title: "Test 1 Title",
    tekst:
      "Dodać: Edycja notatki w podglądzie, wyszukiwanie po tekscie, (TodoList, shopingList - który tworzy listę z checkboxami obok do kliknięcia)",
    createTime: "16:25",
    createDate: "Mon Dec 25 2023",
    tag: "Videos",
    done: false,
  },
  {
    id: 124562,
    title: "Test 2 Title",
    tekst:
      "Maecenas congue ligula a est tincidunt pretium. Quisque consequat facilisis tempus. Duis vitae tincidunt felis. Quisque accumsan libero non leo pretium molestie. Aliquam tortor ex, ornare ut purus sit amet, dapibus ultrices odio. Etiam sodales velit nec lacus venenatis ultrices. Vestibulum non enim eget urna bibendum vehicula sit amet iaculis nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper dignissim arcu in pellentesque. Sed pulvinar iaculis augue, non consequat ante luctus vel. Fusce consectetur augue id cursus iaculis. Maecenas sit amet quam nisi. Vivamus eget nulla non leo venenatis tristique eu non leo. In eget vulputate risus. Nunc sit amet enim mollis,",
    createTime: "16:25",
    createDate: "Mon Dec 25 2023",
    tag: "Home",
    done: false,
  },
  {
    id: 123453,
    title: "Test 3 Title",
    tekst:
      "Maecenas congue ligula a est tincidunt pretium. Quisque consequat facilisis tempus. Duis vitae tincidunt felis. Quisque accumsan libero non leo pretium molestie. Aliquam tortor ex, ornare ut purus sit amet, dapibus ultrices odio. Etiam sodales velit nec lacus venenatis ultrices. Vestibulum non enim eget urna bibendum vehicula sit amet iaculis nibh.",
    createTime: "16:25",
    createDate: "Mon Dec 25 2023",
    tag: "Todo",
    done: false,
  },
];

export default function App() {
  const [tags, setTags] = useState(initialTags);
  const [note, setNote] = useState(initialNotes);
  const [showAddTag, setShowAddTag] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  function handleShowAddTag() {
    setShowAddTag((t) => !t);
    setShowAddNote(false);
    setSelectedNote(null);
  }

  function handleShowAddNote() {
    setShowAddNote((n) => !n);
    setShowAddTag(false);
    setSelectedNote(null);
  }

  function handleSelectedNote(notee) {
    setSelectedNote((n) => (n === notee ? null : notee));
    setShowAddTag(false);
    setShowAddNote(false);
  }

  function handleAddTags(tag) {
    setTags((tags) => [...tags, tag]);
  }

  function handleAddNote(note) {
    setNote((notes) => [...notes, note]);
  }

  function handleToggleNotes(id) {
    setNote((n) =>
      n.map((no) => (no.id === id ? { ...no, done: !no.done } : no))
    );
  }

  function resetSite() {
    setShowAddTag(false);
    setShowAddNote(false);
    setSelectedNote(null);
  }

  function handleDeleteTag(tag) {
    if (
      window.confirm(`Are you sure you want to delete tag: ${tag.tagName} ?`)
    ) {
      setTags((t) => tags.filter((ta) => tag.id !== ta.id));
    } else {
    }
  }

  function handleDeleteNote(curNote) {
    console.log(curNote.id);
    if (window.confirm(`Delete: ${curNote.title} ? `)) {
      setNote((n) => note.filter((no) => curNote.id !== no.id));
    } else {
    }
  }

  return (
    <>
      <AppBar
        resetSite={resetSite}
        showAddNote={showAddNote}
        OnShowAddNote={handleShowAddNote}
      />
      <>
        <TagsMenu
          onDeleteTag={handleDeleteTag}
          tags={tags}
          notes={note}
          showAddTag={showAddTag}
          onShowAddTag={handleShowAddTag}
        />
        {showAddTag ? (
          <AddTag onShowAddTag={handleShowAddTag} onAddTag={handleAddTags} />
        ) : showAddNote ? (
          <AddNote
            onShowAddNote={handleShowAddNote}
            onAddNote={handleAddNote}
            tags={tags}
          />
        ) : selectedNote ? (
          <NoteDetails
            onSelectNote={handleSelectedNote}
            color={
              tags.filter(({ tagName }) => tagName === selectedNote.tag)[0]
                .color
            }
            note={selectedNote}
          />
        ) : (
          <NotesList
            onSelectNote={handleSelectedNote}
            onToggleNote={handleToggleNotes}
            onDeleteNote={handleDeleteNote}
            tags={tags}
            notes={note}
          />
        )}
      </>
    </>
  );
}
