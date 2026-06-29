import { BlockInfo } from '../../core/block/block-types';

export interface SemanticRefreshPort {
    ensureSemanticReadyForInteraction(): void;
}

export interface DragPerfSessionPort {
    ensure(): void;
    flush(reason: string): void;
}

export interface DragEventHandlerPort {
    startPointerDragFromHandle(
        handle: HTMLElement,
        e: PointerEvent,
        getBlockInfo?: () => BlockInfo | null
    ): void;
    resolveDragSourceFromHandle(
        handle: HTMLElement,
        event: { clientX: number; clientY: number },
        getBlockInfo?: () => BlockInfo | null
    ): BlockInfo | null;
    clearCommittedSelectionForDragStart(): void;
}
