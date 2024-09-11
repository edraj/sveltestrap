/** @typedef {typeof __propDef.props}  FigureProps */
/** @typedef {typeof __propDef.events}  FigureEvents */
/** @typedef {typeof __propDef.slots}  FigureSlots */
export default class Figure extends SvelteComponent<{
    [x: string]: any;
    caption?: string | HTMLSlotElement | undefined;
    class?: string | undefined;
    alt?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    caption: {};
}> {
}
export type FigureProps = typeof __propDef.props;
export type FigureEvents = typeof __propDef.events;
export type FigureSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        caption?: string | HTMLSlotElement | undefined;
        class?: string | undefined;
        alt?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        caption: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
