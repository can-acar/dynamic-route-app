const NotFound = (props) => {
  return (
      <div>
        <h1>404 Not Found</h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
      </div>
  );
}

export default NotFound;
