/** @typedef {typeof __propDef.props}  NavLinkProps */
/** @typedef {typeof __propDef.events}  NavLinkEvents */
/** @typedef {typeof __propDef.slots}  NavLinkSlots */
export default class NavLink extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    active?: boolean | undefined;
    href?: string | undefined;
    disabled?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NavLinkProps = typeof __propDef.props;
export type NavLinkEvents = typeof __propDef.events;
export type NavLinkSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        active?: boolean | undefined;
        href?: string | undefined;
        disabled?: boolean | undefined;
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
