import { Sidebar } from "./components/Sidebar";
import { DetailsHome } from "./screens/SignedIn/DetailsHome";

function App() {
  return (
    <div className="flex h-screen min-h-[400px]">
      <Sidebar />
      <main className="p-2 ml-[100px] mt-14 w-[93%]">
        <DetailsHome />
      </main>
    </div>
  );
}

export default App;
