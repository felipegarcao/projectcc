import { Sidebar } from "./components/Sidebar";
import { RouterApp } from "./routes";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />
      <main className="px-8 pb-12 pt-8">
        <RouterApp />
      </main>
    </div>
  );
}

export default App;
