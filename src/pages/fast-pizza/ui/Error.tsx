import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let message = 'Something went wrong.';

  if (isRouteErrorResponse(error)) {
    message = (typeof error.data === 'string' && error.data) || error.statusText;
  } else if (error instanceof globalThis.Error) {
    message = error.message;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default ErrorPage;
