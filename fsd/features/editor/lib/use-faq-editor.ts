import TextAlign from '@tiptap/extension-text-align';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export function useFaqEditor() {
    const editor = useEditor({
        extensions: [StarterKit, TextAlign.configure({ types: ['heading', 'paragraph'], defaultAlignment: 'left' })],
        immediatelyRender: false,
    });

    return { editor };
}
