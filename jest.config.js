// https://kulshekhar.github.io/ts-jest/
/* eslint-disable import/no-commonjs */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.json');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    globals: {
        'ts-jest': {
            tsconfig: "./tsconfig.spec.json"
        }
    }
};
