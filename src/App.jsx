import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";   // importing Register components 



function App() {
  return (
    <>
      <Register />
      <Toaster />
    </>
  );
}

export default App;
