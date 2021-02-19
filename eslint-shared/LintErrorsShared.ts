export abstract class LintErrorsShared {
    // ESLint: 'unusedVar' is defined but never used.(@typescript-eslint/no-unused-vars)
    static noUnusedVars(unusedVar: string): boolean {
        return true;
    }
}
