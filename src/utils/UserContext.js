import { createContext } from "react";

const UserContext =createContext({
    user: {
    name: "default name",
    email: "default email",
    number: "9887653340",
}})

UserContext.displayName = "UserContext" //helps us to find which context is giving us the value in console react component extnsions

export default UserContext;