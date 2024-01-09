// react-router
import {
  useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";

// function
import { loginUser } from "../api";

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (error) {
    return error;
  }
}

export default function Login() {
  const error = useActionData();
  const message = useLoaderData();
  const { state } = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <p>{message}</p>}
      {error && <p>{error.message}</p>}
      <Form method="POST" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
