import { InvoiceCreate } from "@crater/react-sdk";
import "@crater/react-sdk/dist/output.css";
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <InvoiceCreate />
    </div>
  );
}

export default App;
