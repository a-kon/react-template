export const cn = (...args: Array<string | Record<string, boolean>>) => {
    const result = args.map((el) => {
        if (typeof el === 'string') return el;

        const keys = Object.keys(el);
        const objectResult = keys.filter((key) => el[key]);

        return objectResult.join(' ');
    });

    return result.join(' ');
};
