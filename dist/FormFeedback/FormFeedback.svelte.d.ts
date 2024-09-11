/** @typedef {typeof __propDef.props}  FormFeedbackProps */
/** @typedef {typeof __propDef.events}  FormFeedbackEvents */
/** @typedef {typeof __propDef.slots}  FormFeedbackSlots */
export default class FormFeedback extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    valid?: any;
    tooltip?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FormFeedbackProps = typeof __propDef.props;
export type FormFeedbackEvents = typeof __propDef.events;
export type FormFeedbackSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        valid?: any;
        tooltip?: boolean | undefined;
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
