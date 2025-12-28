import type { Editor } from '@tiptap/react';
import { ToolbarItem } from './ToolbarButton';

export function createAddLinkItem(): ToolbarItem {
    return {
        stateKey: 'link',
        text: '링크',
        action: (editor: Editor) => {
            const previousUrl = editor.getAttributes('link').href as string | undefined;

            const input = window.prompt('링크를 입력하세요', previousUrl ?? '');
            if (input === null) return;

            const url = input.trim();

            const chain = editor.chain().focus();

            // 빈 값이면 링크 제거
            if (url === '') {
                chain.extendMarkRange('link').unsetLink().run();
                return;
            }

            const parsedUrl = url.includes(':') ? url : `https://${url}`;
            const { from, to, empty } = editor.state.selection;

            chain.extendMarkRange('link').setLink({ href: parsedUrl });

            // 선택 영역이 없으면 URL 텍스트 삽입
            if (empty) {
                chain.insertContentAt({ from, to }, parsedUrl);
            }

            chain.run();
        },
        isActive: (editor) => editor.isActive('link'),
    };
}
