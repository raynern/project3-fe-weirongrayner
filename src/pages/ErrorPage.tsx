// TODO: Add a button to go back to the homepage

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-white text-3xl font-medium">Oops!</h1>
      <p className="text-lg mt-8 w-[50ch] text-gray-400">
        The page you are looking for does not exist. Check the URL or click the
        button to go back to the homepage.
      </p>
    </div>
  );
};
export default ErrorPage;
