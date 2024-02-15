declare module '*.mdx' {
    import type React from 'react'
    const ReactComponent: React.VFC
    export default ReactComponent
}

declare module 'solid-namespace' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export default (factory: unknown) => Record<string, (label: string) => string>;
}

declare module "@rdfjs/data-model" {
    import {Literal} from "n3";

    export function literal(value: string): Literal {}
}