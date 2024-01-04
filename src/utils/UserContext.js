import { createContext } from "react";

const UserContext =createContext({
    user: {
    name: "default name",
    email: "default email",
}})

export default UserContext;