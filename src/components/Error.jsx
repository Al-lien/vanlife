// react-router
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <>
      <h1>There was an error {error.message}😱</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}

export default Error;
