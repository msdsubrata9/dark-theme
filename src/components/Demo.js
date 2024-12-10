import React, { useRef, useState } from "react";

function Demo() {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  return (
    <div className="p-2 m-4 w-96 h-96 border border-black flex flex-col items-center">
      <div>
        <button
          className="p-2 m-4 bg-green-400"
          onClick={() => {
            x = x + 1;
            console.log("X=" + x);
          }}
        >
          Increase X
        </button>
        <span>Let = {x}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-400"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span>State = {y}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-400"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase Ref
        </button>
        <span>Ref = {ref.current}</span>
      </div>
    </div>
  );
}

export default Demo;
