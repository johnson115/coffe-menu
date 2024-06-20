


import Root from "pages/Root";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>



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
