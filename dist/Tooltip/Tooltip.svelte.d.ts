/** @typedef {typeof __propDef.props}  TooltipProps */
/** @typedef {typeof __propDef.events}  TooltipEvents */
/** @typedef {typeof __propDef.slots}  TooltipSlots */
export default class Tooltip extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | null | undefined;
    children?: string | undefined;
    isOpen?: boolean | undefined;
    placement?: string | undefined;
    id?: string | undefined;
    container?: string | undefined;
    animation?: boolean | undefined;
    target?: string | HTMLElement | undefined;
    delay?: string | number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | null | undefined;
        children?: string | undefined;
        isOpen?: boolean | undefined;
        placement?: string | undefined;
        id?: string | undefined;
        container?: string | undefined;
        animation?: boolean | undefined;
        target?: string | HTMLElement | undefined;
        delay?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
