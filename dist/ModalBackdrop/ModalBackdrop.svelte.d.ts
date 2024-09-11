/** @typedef {typeof __propDef.props}  ModalBackdropProps */
/** @typedef {typeof __propDef.events}  ModalBackdropEvents */
/** @typedef {typeof __propDef.slots}  ModalBackdropSlots */
export default class ModalBackdrop extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    fade?: boolean | undefined;
    isOpen?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ModalBackdropProps = typeof __propDef.props;
export type ModalBackdropEvents = typeof __propDef.events;
export type ModalBackdropSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        fade?: boolean | undefined;
        isOpen?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
