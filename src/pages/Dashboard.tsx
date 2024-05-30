import { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated, user, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  });

  return (
    isAuthenticated && (
      <div className="p-8 flex flex-col items-center align-middle">
        <p className="text-2xl mb-4">Dashboard</p>
        <LogoutButton />
      </div>
    )
  );
};
export default Dashboard;
