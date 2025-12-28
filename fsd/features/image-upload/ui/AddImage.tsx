import { Editor } from '@tiptap/react';

type Props = {
    editor: Editor;
};

export default function AddImage({ editor }: Props) {
    const handleClick = () => {
        editor
            .chain()
            .focus()
            .insertContent({
                type: 'imageUpload',
            })
            .run();

        const { state } = editor.view;
        const currentPos = state.selection.anchor;

        editor
            .chain()
            .insertContentAt(currentPos + 1, { type: 'paragraph' })
            .focus()
            .run();
    };
    return (
        <button
            className="w-[35px] h-[35px] flex items-center justify-center hover:bg-gray-100"
            onClick={handleClick}
            role="button"
            type="button"
            aria-label="이미지 추가"
        >
            아이콘
            {/* <LucideIcon name="Images" className="w-[20px] h-[20px]" /> */}
        </button>
    );
}
