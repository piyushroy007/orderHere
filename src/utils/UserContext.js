import { createContext } from "react";

const loggedInUser = createContext({
    name: "Piyush",
    location: "Kolkata",
});

export default loggedInUser;
