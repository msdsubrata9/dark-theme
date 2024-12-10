import { useMemo, useState } from "react";
import { findPrime } from "./utils/helper";
import Demo from "./components/Demo";

function App() {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div className="App flex">
      <div>
        <div
          className={`p-2 m-4 w-96 h-96 border flex flex-col items-center ${
            isDarkTheme
              ? "bg-gray-800 text-white border-white"
              : "bg-white text-black border-black"
          }`}
        >
          <div>
            <button
              className="p-2 m-2 bg-green-400"
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            >
              toggle
            </button>
          </div>
          <div>
            <input
              type="number"
              className="border border-black text-black"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <div className={isDarkTheme ? "text-white" : "text-black"}>
              Nth Prime:{prime}
            </div>
          </div>
        </div>
      </div>
      <Demo />
    </div>
  );
}

export default App;
