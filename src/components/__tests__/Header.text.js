import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "./../../utils/store";
import UserContext from "../../utils/UserContext";

test("logo visible", () => {
  const header = render(
    <Provider store={store}>
      <UserContext.Provider value={{user: { name: "user", email:"sad", number: "setUser" }}}>
        <Header />
      </UserContext.Provider>
    </Provider>
  );
  console.log(header);
});
