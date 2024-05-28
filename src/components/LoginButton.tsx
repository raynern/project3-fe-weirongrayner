import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="self-center rounded-md p-4 mt-2 w-32 bg-green-600 hover:bg-green-700 transition-all duration-300"
    >
      Log In
    </button>
  );
};

export default LoginButton;
