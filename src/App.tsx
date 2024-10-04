import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import Store from "./store/store";
import { Provider } from "react-redux";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Search/>
      },
      {
        path: '/results',
        element: <SearchResults/>,
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
