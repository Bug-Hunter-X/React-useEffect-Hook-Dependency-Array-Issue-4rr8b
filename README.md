# React useEffect Hook Dependency Array Issue

This repository demonstrates a common issue with React's `useEffect` hook: improper use of the dependency array.  Incorrectly specifying dependencies can lead to unexpected behavior, including infinite loops, stale closures, and performance problems.

## Bug

The `bug.js` file contains a component that uses `useEffect` to log the current count.  However, the dependency array is missing the `count` variable. This will cause the effect to run after every render, even when the count doesn't change, leading to unnecessary console logs and potential performance issues. 

## Solution

The `bugSolution.js` file shows the corrected version. By including `count` in the dependency array, the effect now only runs when the value of `count` changes, resulting in correct behavior and better performance.  The example also demonstrates the use of a cleanup function to handle cases where the component unmounts before the next render.