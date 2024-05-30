import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        loginWithRedirect();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="rounded-full py-3 mt-2 px-40 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
    >
      Start fishing
    </button>
  );
};

export default LoginButton;
