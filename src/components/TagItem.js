export default function TagItem({ bgColor, tag, num, onDeleteTag }) {
  return (
    <div className="tag-item-list">
      {num <= 0 && (
        <p
          style={{ marginLeft: "5%", cursor: "pointer" }}
          onClick={() => onDeleteTag(tag)}
        >
          ❌
        </p>
      )}
      <div className="circle" style={{ backgroundColor: bgColor }}></div>
      <p>{tag.tagName}</p>
      <div className="counter" style={{ backgroundColor: bgColor }}>
        {num >= 10 || num <= 0 ? num : "0" + num}
      </div>
    </div>
  );
}
