/** @typedef {typeof __propDef.props}  CardImgProps */
/** @typedef {typeof __propDef.events}  CardImgEvents */
/** @typedef {typeof __propDef.slots}  CardImgSlots */
export default class CardImg extends SvelteComponent<{
    [x: string]: any;
    src: string;
    class?: string | undefined;
    top?: boolean | undefined;
    bottom?: boolean | undefined;
    alt?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CardImgProps = typeof __propDef.props;
export type CardImgEvents = typeof __propDef.events;
export type CardImgSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        src: string;
        class?: string | undefined;
        top?: boolean | undefined;
        bottom?: boolean | undefined;
        alt?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
