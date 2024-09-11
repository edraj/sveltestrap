/** @typedef {typeof __propDef.props}  ListGroupItemProps */
/** @typedef {typeof __propDef.events}  ListGroupItemEvents */
/** @typedef {typeof __propDef.slots}  ListGroupItemSlots */
export default class ListGroupItem extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    active?: boolean | undefined;
    color?: string | undefined;
    href?: null | undefined;
    disabled?: boolean | undefined;
    tag?: null | undefined;
    action?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ListGroupItemProps = typeof __propDef.props;
export type ListGroupItemEvents = typeof __propDef.events;
export type ListGroupItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        active?: boolean | undefined;
        color?: string | undefined;
        href?: null | undefined;
        disabled?: boolean | undefined;
        tag?: null | undefined;
        action?: boolean | undefined;
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
