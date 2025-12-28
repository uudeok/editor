import { ReactNode } from 'react';

export default function ToolbarGroup({ children }: { children: ReactNode }) {
    return <article style={{ display: 'flex', gap: '5px', padding: '10px' }}>{children}</article>;
}
