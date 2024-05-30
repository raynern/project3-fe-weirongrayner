import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="rounded-full py-3 mt-2 w-80 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
    >
      Log In
    </button>
  );
};

export default LoginButton;
