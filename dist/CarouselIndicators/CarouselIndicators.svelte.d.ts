/** @typedef {typeof __propDef.props}  CarouselIndicatorsProps */
/** @typedef {typeof __propDef.events}  CarouselIndicatorsEvents */
/** @typedef {typeof __propDef.slots}  CarouselIndicatorsSlots */
export default class CarouselIndicators extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    activeIndex?: number | undefined;
    items?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CarouselIndicatorsProps = typeof __propDef.props;
export type CarouselIndicatorsEvents = typeof __propDef.events;
export type CarouselIndicatorsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        activeIndex?: number | undefined;
        items?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
