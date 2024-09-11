/** @typedef {typeof __propDef.props}  FormCheckProps */
/** @typedef {typeof __propDef.events}  FormCheckEvents */
/** @typedef {typeof __propDef.slots}  FormCheckSlots */
export default class FormCheck extends SvelteComponent<{
    [x: string]: any;
    label?: string | undefined;
    class?: string | undefined;
    invalid?: boolean | undefined;
    disabled?: boolean | undefined;
    inner?: any;
    size?: string | undefined;
    value?: any;
    group?: any;
    inline?: boolean | undefined;
    checked?: boolean | undefined;
    id?: any;
    name?: string | undefined;
    reverse?: boolean | undefined;
    type?: string | undefined;
    valid?: boolean | undefined;
}, {
    blur: FocusEvent;
    change: Event;
    focus: FocusEvent;
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    label: {};
}> {
}
export type FormCheckProps = typeof __propDef.props;
export type FormCheckEvents = typeof __propDef.events;
export type FormCheckSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: string | undefined;
        class?: string | undefined;
        invalid?: boolean | undefined;
        disabled?: boolean | undefined;
        inner?: any;
        size?: string | undefined;
        value?: any;
        group?: any;
        inline?: boolean | undefined;
        checked?: boolean | undefined;
        id?: any;
        name?: string | undefined;
        reverse?: boolean | undefined;
        type?: string | undefined;
        valid?: boolean | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        focus: FocusEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        label: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
