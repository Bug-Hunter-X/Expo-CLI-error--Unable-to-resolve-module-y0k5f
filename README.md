# Expo CLI Error: Unable to resolve module

This repository demonstrates a common Expo CLI error related to resolving modules, specifically when dealing with third-party libraries or native modules that are not correctly integrated into the Expo managed workflow.

## Problem

The error message typically looks like this:

`Unable to resolve module "`moduleName`" from "`filePath`"

This often occurs because the required module is missing from your project, or the path to the module is incorrect.  It's particularly common when working with native modules, libraries with native dependencies, or when there are issues with the Expo Go app and how it handles module resolution.

## Solution

The solutions depend on the cause:

1. **Verify Package Installation:** Ensure the module is installed correctly using `expo install moduleName`. 
2. **Check Package.json:** Make sure the module is listed correctly as a dependency in your `package.json` file.
3. **Correct Import Paths:** Double-check that the import path in your code matches the actual location of the module. 
4. **Expo Go and Module Loading:** Sometimes, issues can arise due to caching in Expo Go.  Try clearing the cache in the Expo Go app or restarting it. In certain cases, rebuilding the project can also resolve temporary glitches.
5. **Native Modules:** If you're using a native module, make sure it's properly configured according to its documentation. This often involves linking it correctly within your Expo project, which might require using `expo prebuild` or other specific steps as outlined in the native module's instructions.  
6. **Verify Dependencies:** Ensure there are no conflicts or missing dependencies for your module.  Use `npm ls` or `yarn why` to check the dependency tree.

## Reproduction

The `bug.js` file illustrates the error.  The `bugSolution.js` file shows how to resolve it.