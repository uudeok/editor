import type { Editor } from '@tiptap/react';
import styles from './ToolbarButton.module.scss';

export interface ToolbarItem {
    stateKey: string;
    text: string;
    icon?: string;
    action: (editor: Editor) => void;
    isActive?: (editor: Editor) => boolean;
    isDisabled?: (editor: Editor) => void;
}

interface ToolBarButton {
    editor: Editor;
    item: ToolbarItem;
}

export default function ToolbarButton({ editor, item }: ToolBarButton) {
    const isActive = item.isActive?.(editor);
    const isDisabled = item.isDisabled?.(editor);

    return (
        <button
            type="button"
            className={styles.button}
            data-active={isActive}
            disabled={isDisabled || false}
            onClick={() => item.action(editor)}
        >
            {item.icon ?? item.text}
        </button>
    );
}
