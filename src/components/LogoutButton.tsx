import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="self-center rounded-md p-4 mt-2 w-32 bg-red-600 hover:bg-red-700 transition-all duration-300"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;