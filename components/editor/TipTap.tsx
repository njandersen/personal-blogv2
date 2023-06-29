"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolBar from "./EditorToolBar";

const TipTap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "border-2 border-black p-4 rounded-lg shadow-lg",
      },
    },
    content: "<p>Hello World! </p>",
  });

  return (
    <div className="w-2/3">
      <EditorToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
