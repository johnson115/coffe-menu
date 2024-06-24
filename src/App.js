import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./root";
import { createTheme } from "@mui/material";
import HomePage from "./pages/home";
import Jus from "./pages/jus";
import Notfound from "./pages/404";
import Coffe from "./pages/coffe";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffa000",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Jus" element={<Jus />} />
      <Route path="/Coffe" element={<Coffe />} />

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
