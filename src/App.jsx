import { routes } from "./routes/routs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}

export default App;
