import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home';
import Search from '../pages/search'
import Collection from '../pages/collection'
import Feed from '../pages/feed'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/content-feed',
    element: <Feed />
  },
  {
    path: '/collection',
    element: <Collection />
  }
])

export default routes