import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

export const routes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true}
]