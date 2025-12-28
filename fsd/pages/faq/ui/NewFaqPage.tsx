'use client';

import styles from './NewFaqPage.module.scss';
import { EditorContent } from '@tiptap/react';
import {
    alignOptions,
    headingOptions,
    markOptions,
    structureOptions,
} from '../../../features/editor/model/toolbar-config';
import ToolbarGroup from '../../../features/editor/ui/ToolbarGroup';
import { useFaqEditor } from '../../../features/editor/lib/use-faq-editor';
import ToolbarButton from '../../../features/editor/ui/ToolbarButton';
import AddImage from '../../../features/image-upload/ui/AddImage';

export default function NewFaqPage() {
    const { editor } = useFaqEditor();

    if (!editor) return <div>Loading...</div>;

    return (
        <>
            <div className={styles.layout}>
                <ToolbarGroup>
                    {headingOptions.map((item) => (
                        <ToolbarButton key={item.stateKey} item={item} editor={editor} />
                    ))}
                </ToolbarGroup>
                <ToolbarGroup>
                    {markOptions.map((item) => (
                        <ToolbarButton key={item.stateKey} item={item} editor={editor} />
                    ))}
                </ToolbarGroup>
                <ToolbarGroup>
                    {structureOptions.map((item) => (
                        <ToolbarButton key={item.stateKey} item={item} editor={editor} />
                    ))}
                </ToolbarGroup>
                <ToolbarGroup>
                    {alignOptions.map((item) => (
                        <ToolbarButton key={item.stateKey} item={item} editor={editor} />
                    ))}
                </ToolbarGroup>
                <ToolbarGroup>
                    <AddImage editor={editor} />
                </ToolbarGroup>
            </div>
            <EditorContent editor={editor} className={styles.content} />
        </>
    );
}
