import { ButtonContato } from "./components/ButtonContato";
import { Sidebar } from "./components/Sidebar";
import { RouterApp } from "./routes";
import { Login } from "./screens/SignIn/Login";

function App() {
  const app = true;

  return (
    <>
      {app ? (
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-8 pb-12 pt-8">
            <RouterApp />
            <ButtonContato />
          </main>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
