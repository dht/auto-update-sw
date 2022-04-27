module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        '@gli/devtools': '<rootDir>/packages/web-devtools',
        '@gli/ui': '<rootDir>/packages/web-ui/src',
        '@gli/base-ui': '<rootDir>/packages/web-base-ui/src',
        '@gli/testing-base': '<rootDir>/packages/web-testing-base',
        '@gli/hooks': '<rootDir>/packages/hooks',
        '@gli/root-types': '<rootDir>/packages/root-types',
        '@gli/themes': '<rootDir>/packages/web-themes',
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};
