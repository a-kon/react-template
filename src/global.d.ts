declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default string;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: Readonly<Record<string, string>>;
    export default classes;
}
