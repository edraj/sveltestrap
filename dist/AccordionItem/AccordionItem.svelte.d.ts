/** @typedef {typeof __propDef.props}  AccordionItemProps */
/** @typedef {typeof __propDef.events}  AccordionItemEvents */
/** @typedef {typeof __propDef.slots}  AccordionItemSlots */
export default class AccordionItem extends SvelteComponent<{
    header?: string | undefined;
    class?: string | undefined;
    active?: boolean | undefined;
    extraPrefix?: null | undefined;
    extraSuffix?: null | undefined;
}, {
    introstart: any;
    introend: any;
    outrostart: any;
    outroend: any;
    toggle: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    default: {};
}> {
}
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        header?: string | undefined;
        class?: string | undefined;
        active?: boolean | undefined;
        extraPrefix?: null | undefined;
        extraSuffix?: null | undefined;
    };
    events: {
        introstart: any;
        introend: any;
        outrostart: any;
        outroend: any;
        toggle: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
