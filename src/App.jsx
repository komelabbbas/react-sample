import { useState } from "react";
import { InvoiceTable } from "@crater/react-sdk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <InvoiceTable />
    </div>
  );
}

export default App;
