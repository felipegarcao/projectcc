import { Login } from "./screens/SignIn/Login";
import { RouterApp } from "./routes";
import { Sidebar } from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const app = false;

  return (
    <>
      <ToastContainer theme="colored" position="top-right"></ToastContainer>
      {app ? (
        <div className="min-h-screen lg:grid lg:grid-cols-app">
          <Sidebar />

          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
            <RouterApp />
          </main>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
