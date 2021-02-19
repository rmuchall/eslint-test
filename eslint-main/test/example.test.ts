abstract class LintErrorsTest {
    // ESLint: 'unusedVar' is defined but never used.(@typescript-eslint/no-unused-vars)
    static noUnusedVars(unusedVar: string): boolean {
        return true;
    }
}

LintErrorsTest.noUnusedVars("test");
console.log("eslint-problem executed successfully");

test("example", () => {
    expect(true).toBeTruthy();
});
