import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      await loginWithRedirect({
        appState: {
          returnTo: "http://localhost:5173/dashboard",
        },
        // authorizationParams: {
        //   screen_hint: "signup",
        // },
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        handleLogin();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <button
      onClick={handleLogin}
      className="rounded-full py-3 mt-2 px-40 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
    >
      Start fishing
    </button>
  );
};

export default LoginButton;
