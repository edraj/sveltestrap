/** @typedef {typeof __propDef.props}  ModalProps */
/** @typedef {typeof __propDef.events}  ModalEvents */
/** @typedef {typeof __propDef.slots}  ModalSlots */
export default class Modal extends SvelteComponent<{
    [x: string]: any;
    body?: boolean | undefined;
    header?: string | undefined;
    class?: string | undefined;
    theme?: string | null | undefined;
    toggle?: Function | undefined;
    fade?: boolean | undefined;
    isOpen?: boolean | undefined;
    size?: string | undefined;
    keyboard?: boolean | undefined;
    static?: boolean | undefined;
    autoFocus?: boolean | undefined;
    centered?: boolean | undefined;
    container?: HTMLElement | null | undefined;
    fullscreen?: boolean | undefined;
    backdrop?: boolean | undefined;
    contentClassName?: string | undefined;
    labelledBy?: string | undefined;
    modalClassName?: string | undefined;
    modalStyle?: string | null | undefined;
    returnFocusAfterClose?: boolean | undefined;
    scrollable?: boolean | undefined;
    unmountOnClose?: boolean | undefined;
    wrapClassName?: string | undefined;
}, {
    opening: CustomEvent<any>;
    open: CustomEvent<any>;
    closing: CustomEvent<any>;
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    external: {};
    default: {};
}> {
}
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        body?: boolean | undefined;
        header?: string | undefined;
        class?: string | undefined;
        theme?: string | null | undefined;
        toggle?: Function | undefined;
        fade?: boolean | undefined;
        isOpen?: boolean | undefined;
        size?: string | undefined;
        keyboard?: boolean | undefined;
        static?: boolean | undefined;
        autoFocus?: boolean | undefined;
        centered?: boolean | undefined;
        container?: HTMLElement | null | undefined;
        fullscreen?: boolean | undefined;
        backdrop?: boolean | undefined;
        contentClassName?: string | undefined;
        labelledBy?: string | undefined;
        modalClassName?: string | undefined;
        modalStyle?: string | null | undefined;
        returnFocusAfterClose?: boolean | undefined;
        scrollable?: boolean | undefined;
        unmountOnClose?: boolean | undefined;
        wrapClassName?: string | undefined;
    };
    events: {
        opening: CustomEvent<any>;
        open: CustomEvent<any>;
        closing: CustomEvent<any>;
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        external: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
