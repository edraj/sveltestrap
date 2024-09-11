/** @typedef {typeof __propDef.props}  ImageProps */
/** @typedef {typeof __propDef.events}  ImageEvents */
/** @typedef {typeof __propDef.slots}  ImageSlots */
export default class Image extends SvelteComponent<{
    [x: string]: any;
    figure?: boolean | undefined;
    class?: string | undefined;
    theme?: string | null | undefined;
    alt?: string | undefined;
    fluid?: boolean | undefined;
    thumbnail?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ImageProps = typeof __propDef.props;
export type ImageEvents = typeof __propDef.events;
export type ImageSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        figure?: boolean | undefined;
        class?: string | undefined;
        theme?: string | null | undefined;
        alt?: string | undefined;
        fluid?: boolean | undefined;
        thumbnail?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
