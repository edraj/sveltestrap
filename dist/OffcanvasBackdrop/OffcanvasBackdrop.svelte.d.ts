/** @typedef {typeof __propDef.props}  OffcanvasBackdropProps */
/** @typedef {typeof __propDef.events}  OffcanvasBackdropEvents */
/** @typedef {typeof __propDef.slots}  OffcanvasBackdropSlots */
export default class OffcanvasBackdrop extends SvelteComponent<{
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
export type OffcanvasBackdropProps = typeof __propDef.props;
export type OffcanvasBackdropEvents = typeof __propDef.events;
export type OffcanvasBackdropSlots = typeof __propDef.slots;
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
