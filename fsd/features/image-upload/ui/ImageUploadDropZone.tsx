import styles from './ImageUploadDropZone.module.scss';

type Props = {
    maxSize: number;
};

export default function ImageUploadDropZone({ maxSize }: Props) {
    return (
        <div className={styles.wrapper}>
            <div>icon</div>
            {/* <LucideIcon name="FileImage" className={styles.icon} /> */}

            <div className={styles.textWrapper}>
                <p className={styles.description}>이미지를 드래그하거나 클릭해 업로드할 수 있어요.</p>

                <p className={styles.subText}>최대 크기: {maxSize / 1024 / 1024}MB</p>

                <p className={styles.subText}>지원되는 파일 형식: JPEG, PNG, GIF, WEBP</p>
            </div>
        </div>
    );
}
