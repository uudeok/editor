import styles from './ToolbarGroup.module.scss';
import { ReactNode } from 'react';

export default function ToolbarGroup({ children }: { children: ReactNode }) {
    return <article className={styles.toolbar}>{children}</article>;
}
