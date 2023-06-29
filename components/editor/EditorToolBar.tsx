import { Editor } from "@tiptap/react";

interface EditorToolBarProps {
  editor: Editor | null;
}

export default function EditorToolBar({ editor }: EditorToolBarProps) {
  return (
    <div className="border-2 border-black mb-1">
      <button
        className="border border-black p-4"
        onClick={() => editor?.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className="border border-black p-4"
        onClick={() => editor?.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        className="border border-black p-4"
        onClick={() => editor?.chain().focus().toggleStrike().run()}
      >
        Strike
      </button>
    </div>
  );
}
