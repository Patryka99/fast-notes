import Button from "./Button";
import TagItem from "./TagItem";
export default function TagsMenu({
  tags,
  notes,
  onShowAddTag,
  showAddTag,
  onDeleteTag,
}) {
  return (
    <div className="tags-menu">
      {tags.map((t) => (
        <TagItem
          key={t.id}
          onDeleteTag={onDeleteTag}
          bgColor={t.color}
          tag={t}
          num={notes
            .filter(({ tag }) => tag === t.tagName)
            .reduce((sum) => sum + 1, 0)}
        />
      ))}
      <Button onClick={onShowAddTag}>
        {showAddTag ? "Cancel" : "Add new tag"}
      </Button>
    </div>
  );
}
