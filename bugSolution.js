```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when count changes
    console.log('Count:', count); 
    return () => {
      // Cleanup function (optional)
      console.log('Component unmounted');
    };
  }, [count]); // Correctly includes count in dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```