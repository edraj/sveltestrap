/** @typedef {typeof __propDef.props}  NavItemProps */
/** @typedef {typeof __propDef.events}  NavItemEvents */
/** @typedef {typeof __propDef.slots}  NavItemSlots */
export default class NavItem extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    active?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NavItemProps = typeof __propDef.props;
export type NavItemEvents = typeof __propDef.events;
export type NavItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        active?: boolean | undefined;
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
