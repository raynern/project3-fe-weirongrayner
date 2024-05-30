import { motion } from "framer-motion";
import LoginButton from "./components/LoginButton";
import "./App.css";

const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex min-h-screen flex-col text-center items-center justify-center align-middle px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.25,
          }}
        >
          <h1 className="galindo-regular font-semibold text-fuchsia-400">
            Gather <span className="text-yellow-300">Fish</span>
          </h1>
          <h2 className="text-lg font-medium text-center mb-24">
            Catch fish with your friends!
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{
            delay: 0.4,
          }}
        ></motion.div>
        <LoginButton />
      </div>
      <div className="text-center flex text-gray-400 border border-blue-800 justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 py-2 px-6 rounded-full">
        <p>
          Press <span className="font-bold">Spacebar</span> to signup / login
        </p>
      </div>
    </div>
  );
};

export default App;
