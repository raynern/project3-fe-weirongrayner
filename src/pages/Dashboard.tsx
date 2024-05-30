import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated, user, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  return (
    <div className="p-8 flex flex-col items-center align-middle">
      <p className="text-2xl mb-4">Dashboard</p>
      <LogoutButton />
      <p className="mt-4">{user?.name} is logged in.</p>
    </div>
  );
};
export default Dashboard;
