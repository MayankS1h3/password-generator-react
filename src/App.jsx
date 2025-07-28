import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [charsAllowed, setCharsAllowed] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="min-h-screen flex justify-center items-start pt-20 bg-black text-white">
        <div className="w-[22rem] space-y-6">
          <h2 className="text-center text-4xl font-semibold tracking-wide text-yellow-400">
            Password Generator
          </h2>

          <div className="flex rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="password"
              value={password}
              readOnly
              className="flex-grow bg-gray-800 px-4 py-2 text-yellow-200 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-4 text-sm font-medium">
              Copy
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 flex-grow">
              <input
                type="range"
                min={8}
                max={15}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full accent-yellow-500"
              />
              <label className="whitespace-nowrap text-sm">
                Length: {length}
              </label>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                defaultValue={numbersAllowed}
                onChange={() => setNumbersAllowed((prev) => !prev)}
                className="h-4 w-4 accent-yellow-500"
              />
              <label className="text-sm">Numbers</label>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                defaultValue={charsAllowed}
                onChange={() => setCharsAllowed((prev) => !prev)}
                className="h-4 w-4 accent-yellow-500"
              />
              <label className="text-sm">Chars</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
