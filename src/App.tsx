import { Sidebar } from "./components/Sidebar";
import { DetailsHome } from "./screens/SignedIn/DetailsHome";
import { Home } from "./screens/SignedIn/Home";
import { MyProfile } from "./screens/SignedIn/MyProfile";

function App() {
  return (
    <div className="flex h-screen min-h-[400px]">
      <Sidebar />
      <main className="p-2 pr-8 mt-14 w-full">
        <Home />
      </main>
    </div>
  );
}

export default App;
