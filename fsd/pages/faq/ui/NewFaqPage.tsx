'use client';

import { EditorContent } from '@tiptap/react';
import {
    alignOptions,
    headingOptions,
    markOptions,
    structureOptions,
} from '../../../features/editor/model/toolbar-config';
import ToolbarGroup from '../../../features/editor/ui/EditorToolbar';
import { useFaqEditor } from '../../../features/editor/lib/use-faq-editor';

export default function NewFaqPage() {
    const { editor } = useFaqEditor();

    if (!editor) return <div>Loading...</div>;

    return (
        <>
            <ToolbarGroup>
                {headingOptions.map(({ icon, action, stateKey, text }) => (
                    <button key={stateKey} onClick={() => action(editor)}>
                        {text}
                    </button>
                ))}
            </ToolbarGroup>
            <ToolbarGroup>
                {markOptions.map(({ icon, action, stateKey, text }) => (
                    <button key={stateKey} onClick={() => action(editor)}>
                        {text}
                    </button>
                ))}
            </ToolbarGroup>
            <ToolbarGroup>
                {structureOptions.map(({ icon, action, stateKey, text }) => (
                    <button key={stateKey} onClick={() => action(editor)}>
                        {text}
                    </button>
                ))}
            </ToolbarGroup>
            <ToolbarGroup>
                {alignOptions.map(({ icon, action, stateKey, text }) => (
                    <button key={stateKey} onClick={() => action(editor)}>
                        {text}
                    </button>
                ))}
            </ToolbarGroup>
            <EditorContent editor={editor} />
        </>
    );
}
