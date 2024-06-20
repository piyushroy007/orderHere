import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import loggedInUser from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const data = {
            name: "Rahul",
        };
        setUserData(data);
    }, []);

    return (
        <Provider store={appStore}>
            <loggedInUser.Provider
                value={{
                    name: userData.name,
                    setUserData,
                }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </loggedInUser.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
