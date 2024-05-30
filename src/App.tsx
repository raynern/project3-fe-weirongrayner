import LoginButton from "./components/LoginButton";

const App = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col text-center items-center justify-center align-middle">
        <h1 className="galindo-regular font-semibold text-fuchsia-400">
          Gather <span className="text-yellow-300">Fish</span>
        </h1>
        <h2 className="text-xl font-medium text-center mb-24">
          Catch fish with your friends!
        </h2>
        <LoginButton />
      </div>
      <div className="flex text-gray-400 border border-blue-800 justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 py-2 px-6 rounded-full">
        <p>
          Press <span className="font-bold">Spacebar</span> to login
        </p>
      </div>
    </div>
  );
};

export default App;
