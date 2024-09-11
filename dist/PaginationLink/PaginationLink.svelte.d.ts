/** @typedef {typeof __propDef.props}  PaginationLinkProps */
/** @typedef {typeof __propDef.events}  PaginationLinkEvents */
/** @typedef {typeof __propDef.slots}  PaginationLinkSlots */
export default class PaginationLink extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    ariaLabel?: string | undefined;
    href?: string | undefined;
    next?: boolean | undefined;
    previous?: boolean | undefined;
    first?: boolean | undefined;
    last?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PaginationLinkProps = typeof __propDef.props;
export type PaginationLinkEvents = typeof __propDef.events;
export type PaginationLinkSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        ariaLabel?: string | undefined;
        href?: string | undefined;
        next?: boolean | undefined;
        previous?: boolean | undefined;
        first?: boolean | undefined;
        last?: boolean | undefined;
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
