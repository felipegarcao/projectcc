import { ButtonContato } from "./components/ButtonContato";
import { Header } from "./components/Header";
import { Login } from "./screens/SignIn/Login";
import { RouterApp } from "./routes";
import { Sidebar } from "./components/Sidebar";

function App() {
  const app = true;

  return (
    <>
      {app ? (
        <div className="grid min-h-screen lg:grid-cols-app">
            <Sidebar />
        
          <div className="block lg:hidden">
            <Header />
          </div>
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
