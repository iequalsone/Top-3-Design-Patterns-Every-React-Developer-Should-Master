// HOC to add loading behavior
function withLoading<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    if (props.isLoading) return <div>Loading...</div>;
    return <WrappedComponent {...props} />;
  };
}

// Regular component
const DataDisplay: React.FC<{ data: string[] }> = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

// Enhanced component with loading behavior
const DataDisplayWithLoading = withLoading(DataDisplay);

// Usage
<DataDisplayWithLoading isLoading={true} data={[]} />;
