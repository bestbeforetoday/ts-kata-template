module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageProvider: 'v8',
    collectCoverageFrom: [
        'src/**/*.[jt]s?(x)',
        '!**/*.d.ts',
    ],
    testMatch: [
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
};
