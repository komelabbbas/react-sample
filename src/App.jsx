import { InvoiceCreate,InvoiceTable } from "@crater/react-sdk";
import "@crater/react-sdk/dist/style.css";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <InvoiceTable />
      <InvoiceCreate/>
    </div>
  );
}

export default App;
