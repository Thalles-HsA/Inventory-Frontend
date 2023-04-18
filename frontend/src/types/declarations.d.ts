declare module "*.svg" {
    const content: any;
    export default content;
}
declare module "*.png" {
    const content: any;
    export default content;
}

declare module 'react-dom' {
    export function createRoot(container: Element | Document | null, options?: RootOptions): ReactDOMRoot;
}
