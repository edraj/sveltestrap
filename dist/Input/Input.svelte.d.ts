/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponent<{
    [x: string]: any;
    label?: string | undefined;
    class?: string | undefined;
    theme?: string | undefined;
    invalid?: boolean | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
    inner?: string | undefined;
    size?: string | undefined;
    value?: string | undefined;
    group?: string | undefined;
    checked?: boolean | undefined;
    name?: string | undefined;
    reverse?: boolean | undefined;
    type?: string | undefined;
    valid?: boolean | undefined;
    bsSize?: string | undefined;
    feedback?: string | any[] | undefined;
    files?: any[] | undefined;
    max?: string | number | undefined;
    min?: string | number | undefined;
    multiple?: boolean | undefined;
    placeholder?: string | undefined;
    plaintext?: boolean | undefined;
    readonly?: boolean | undefined;
}, {
    blur: FocusEvent;
    change: Event;
    click: MouseEvent;
    focus: FocusEvent;
    input: Event;
    keydown: KeyboardEvent;
    keypress: KeyboardEvent;
    keyup: KeyboardEvent;
    mousedown: MouseEvent;
    mouseup: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: string | undefined;
        class?: string | undefined;
        theme?: string | undefined;
        invalid?: boolean | undefined;
        color?: string | undefined;
        disabled?: boolean | undefined;
        inner?: string | undefined;
        size?: string | undefined;
        value?: string | undefined;
        group?: string | undefined;
        checked?: boolean | undefined;
        name?: string | undefined;
        reverse?: boolean | undefined;
        type?: string | undefined;
        valid?: boolean | undefined;
        bsSize?: string | undefined;
        feedback?: string | any[] | undefined;
        files?: any[] | undefined;
        max?: string | number | undefined;
        min?: string | number | undefined;
        multiple?: boolean | undefined;
        placeholder?: string | undefined;
        plaintext?: boolean | undefined;
        readonly?: boolean | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        input: Event;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mousedown: MouseEvent;
        mouseup: MouseEvent;
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
