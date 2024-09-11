/** @typedef {typeof __propDef.props}  CarouselCaptionProps */
/** @typedef {typeof __propDef.events}  CarouselCaptionEvents */
/** @typedef {typeof __propDef.slots}  CarouselCaptionSlots */
export default class CarouselCaption extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    captionHeader?: string | undefined;
    captionText?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CarouselCaptionProps = typeof __propDef.props;
export type CarouselCaptionEvents = typeof __propDef.events;
export type CarouselCaptionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        captionHeader?: string | undefined;
        captionText?: string | undefined;
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
