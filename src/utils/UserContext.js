import { createContext } from "react";

const loggedInUser = createContext({
    name: "Piyush",
    location: "India",
});

export default loggedInUser;
