/** @typedef {typeof __propDef.props}  AccordionHeaderProps */
/** @typedef {typeof __propDef.events}  AccordionHeaderEvents */
/** @typedef {typeof __propDef.slots}  AccordionHeaderSlots */
export default class AccordionHeader extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionHeaderProps = typeof __propDef.props;
export type AccordionHeaderEvents = typeof __propDef.events;
export type AccordionHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
