export const isNullable = (variable: unknown): variable is null | undefined =>
    variable === undefined || variable === null;
