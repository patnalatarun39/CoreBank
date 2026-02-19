import { useState } from "react";
import Form from "./Form";
import UserTable from "./UserTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <UserTable />
    </>
  );
}

export default App;
