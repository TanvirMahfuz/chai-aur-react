import {useState, useCallback, useEffect} from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const generator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    numberAllowed ? (str += "0123456789") : (str += "");
    characterAllowed ? (str += "!@#$%^&*()_+~`|}{[]:;?><,./-=") : (str += "");
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, characterAllowed, length, setPassword]);

  useEffect(() => {
    generator();
  }, [length, numberAllowed, characterAllowed, generator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-4 my-8 bg-gray-800 text-white">
      <h1 className="text-center text-xl font-semibold mb-4">
        Password Generator
      </h1>
      <div className="flex shadow-md rounded-md overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-gray-800 bg-gray-100 rounded-l-md"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <label htmlFor="length">length: {length} </label>
          <input
            id="length"
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center gap-x-1 ">
          <input
            id="character"
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="character"> Character </label>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input
            id="number"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number"> Numbers </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
