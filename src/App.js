import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import { Provider } from "react-redux"
import store from "./utils/store"
import Cart from "./components/Cart"

const InstaMart = lazy(() => import('./components/InstaMart'))
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <Header />
                <Outlet />
            </Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><InstaMart /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
