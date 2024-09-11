/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    close?: boolean | undefined;
    active?: boolean | undefined;
    children?: string | undefined;
    color?: string | undefined;
    href?: string | undefined;
    block?: boolean | undefined;
    disabled?: boolean | undefined;
    inner?: HTMLElement | undefined;
    outline?: boolean | undefined;
    size?: string | undefined;
    value?: string | undefined;
}, {
    click: MouseEvent;
    focus: FocusEvent;
    blur: FocusEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        close?: boolean | undefined;
        active?: boolean | undefined;
        children?: string | undefined;
        color?: string | undefined;
        href?: string | undefined;
        block?: boolean | undefined;
        disabled?: boolean | undefined;
        inner?: HTMLElement | undefined;
        outline?: boolean | undefined;
        size?: string | undefined;
        value?: string | undefined;
    };
    events: {
        click: MouseEvent;
        focus: FocusEvent;
        blur: FocusEvent;
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
