import {LintErrorsShared} from "eslint-shared/LintErrorsShared";

abstract class LintErrorsMain {
    // ESLint: 'unusedVar' is defined but never used.(@typescript-eslint/no-unused-vars)
    static noUnusedVars(unusedVar: string): boolean {
        return true;
    }
}

LintErrorsMain.noUnusedVars("test");
LintErrorsShared.noUnusedVars("test");
console.log("eslint-main executed successfully");

// https://eslint.org/
// https://github.com/typescript-eslint/typescript-eslint
// https://www.jetbrains.com/help/webstorm/2020.3/eslint.html
