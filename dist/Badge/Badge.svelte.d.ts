/** @typedef {typeof __propDef.props}  BadgeProps */
/** @typedef {typeof __propDef.events}  BadgeEvents */
/** @typedef {typeof __propDef.slots}  BadgeSlots */
export default class Badge extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | undefined;
    children?: string | undefined;
    color?: string | undefined;
    ariaLabel?: string | undefined;
    border?: string | boolean | undefined;
    href?: string | undefined;
    indicator?: boolean | undefined;
    pill?: boolean | undefined;
    positioned?: boolean | undefined;
    placement?: string | undefined;
    shadow?: string | boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | undefined;
        children?: string | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
        border?: string | boolean | undefined;
        href?: string | undefined;
        indicator?: boolean | undefined;
        pill?: boolean | undefined;
        positioned?: boolean | undefined;
        placement?: string | undefined;
        shadow?: string | boolean | undefined;
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
