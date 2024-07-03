import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./root";

import HomePage from "./pages/home";
import Jus from "./pages/jus";
import Notfound from "./pages/404";
import Coffe from "./pages/coffe";
import Contact from "./pages/contact";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Jus" element={<Jus />} />
      <Route path="/Coffe" element={<Coffe />} />
      <Route path="/Contact-us" element={<Contact />} />

      <Route path="*" element={<Notfound/>} />

    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
