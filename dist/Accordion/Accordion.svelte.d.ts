/** @typedef {typeof __propDef.props}  AccordionProps */
/** @typedef {typeof __propDef.events}  AccordionEvents */
/** @typedef {typeof __propDef.slots}  AccordionSlots */
export default class Accordion extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    flush?: boolean | undefined;
    stayOpen?: boolean | undefined;
    theme?: string | undefined;
}, {
    toggle: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        flush?: boolean | undefined;
        stayOpen?: boolean | undefined;
        theme?: string | undefined;
    };
    events: {
        toggle: CustomEvent<any>;
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
