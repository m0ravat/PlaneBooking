import Home from "./Pages/Home/home";
import Flights from "./Pages/Flights/flights";
import Contact from "./Pages/Contact/contact";
const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"flights",
        element: <Flights />,
    },
    {
        path:"contact",
        element: <Contact />,
    }
]
export default routes