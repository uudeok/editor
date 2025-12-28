import type { Editor } from '@tiptap/react';
import { ToolbarItem } from './ToolbarButton';

export function createAddImageItem(): ToolbarItem {
    return {
        stateKey: 'image',
        text: '이미지',
        action: (editor: Editor) => {
            editor.chain().focus().insertContent({ type: 'imageUpload' }).run();

            const { state } = editor.view;
            const currentPos = state.selection.anchor;

            editor
                .chain()
                .insertContentAt(currentPos + 1, { type: 'paragraph' })
                .focus()
                .run();
        },
    };
}
