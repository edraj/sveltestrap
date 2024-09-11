export function createPopperActions(initOptions: any): (((node: any) => {
    destroy(): void;
}) | ((node: any, contentOptions: any) => {
    update(newContentOptions: any): void;
    destroy(): void;
}) | (() => any))[];
