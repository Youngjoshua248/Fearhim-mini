import { useState } from "react";
import Landing from "./components/Landing";
import StyleBoard from "./components/StyleBoard";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#685044] font-sans">
      {entered ? <StyleBoard /> : <Landing onEnter={() => setEntered(true)} />}
    </div>
  );
}
