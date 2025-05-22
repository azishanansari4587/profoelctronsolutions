'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Youtube from '@tiptap/extension-youtube'
import Link from '@tiptap/extension-link'
import CodeBlock from '@tiptap/extension-code-block'
import Blockquote from '@tiptap/extension-blockquote'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'

import {
  Bold, Italic, Underline as UnderlineIcon, Heading2, Heading3, Quote, ImageIcon, YoutubeIcon,
  List as BulletIcon, ListOrdered, Code, Link as LinkIcon
} from 'lucide-react'

import { useRef } from 'react'
import { useEffect } from 'react'

export default function TiptapEditor({ value, onChange }) {
  const fileInputRef = useRef(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      Underline,
      Image,
      Youtube,
      Link,
      CodeBlock,
      Blockquote,
      Heading.configure({ levels: [2, 3] }),
      BulletList,
      OrderedList,
      ListItem,
    ],
    content: value, // initialize with parent value
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange(html) // pass content to parent
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value)
    }
  }, [value, editor]);


  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    if (data?.url) {
      editor.chain().focus().setImage({ src: data.url }).run()
    }
  }

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL:')
    if (!url) return
    editor.chain().focus().setYoutubeVideo({
      src: url,
      width: 640,
      height: 360,
    }).run()
  }

  const addLink = () => {
    const url = prompt('Enter URL:')
    if (!url) return
    editor.chain().focus().setLink({ href: url }).run()
  }

  return (
    <div className="border rounded-md shadow-sm p-3 space-y-2 bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b pb-2 mb-2">
        <button onClick={() => editor?.chain().focus().toggleBold().run()} disabled={!editor}>
          <Bold size={18} className={editor?.isActive('bold') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()} disabled={!editor}>
          <Italic size={18} className={editor?.isActive('italic') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleUnderline().run()} disabled={!editor}>
          <UnderlineIcon size={18} className={editor?.isActive('underline') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} disabled={!editor}>
          <Heading2 size={18} className={editor?.isActive('heading', { level: 2 }) ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} disabled={!editor}>
          <Heading3 size={18} className={editor?.isActive('heading', { level: 3 }) ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleBlockquote().run()} disabled={!editor}>
          <Quote size={18} className={editor?.isActive('blockquote') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleCodeBlock().run()} disabled={!editor}>
          <Code size={18} className={editor?.isActive('codeBlock') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleBulletList().run()} disabled={!editor}>
          <BulletIcon size={18} className={editor?.isActive('bulletList') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} disabled={!editor}>
          <ListOrdered size={18} className={editor?.isActive('orderedList') ? 'text-blue-600' : ''} />
        </button>
        <button onClick={() => fileInputRef.current?.click()} disabled={!editor}>
          <ImageIcon size={18} />
        </button>
        <button onClick={() => editor && addYoutubeVideo()} disabled={!editor}>
          <YoutubeIcon size={18} />
        </button>
        <button onClick={() => editor && addLink()} disabled={!editor}>
          <LinkIcon size={18} />
        </button>
      </div>
  
      {/* File input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
      />
  
      {/* Editor Content */}
      {editor && (
        <EditorContent editor={editor} className="tiptap prose max-w-none min-h-[300px] focus:outline-none" />

      )}
    </div>
  )
  
}
