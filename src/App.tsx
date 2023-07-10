import { Sidebar } from "./components/Sidebar";
import { DetailsHome } from "./screens/SignedIn/DetailsHome";

function App() {
  return (
    <div className="flex h-screen min-h-[400px]">
      <Sidebar />
      <main className="p-2 pr-8 mt-14 w-full">
        <DetailsHome />
      </main>
    </div>
  );
}

export default App;
