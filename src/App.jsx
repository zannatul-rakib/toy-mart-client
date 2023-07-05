import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Router";
import AuthProvider from "./provider/AuthProvider/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
