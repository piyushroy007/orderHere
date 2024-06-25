import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Test cases for the Header Components", () => {
    it("Should load Contact Us in the header component", () => {
        render(
            /* 
                Broswerrouter is imported for LINK
                Provider is imported for REDUX store
            */
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // const headerItem = screen.getByRole("button", { name: "Login" });
        const headerCart = screen.getByText("Contact Us");

        // expect(headerItem).toBeInTheDocument();
        expect(headerCart).toBeInTheDocument();
    });

    it("Should load logout when clicked on Login in the header component", () => {
        render(
            /* 
                Broswerrouter is imported for LINK
                Provider is imported for REDUX store
            */
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByRole("button", { name: "Login" });
        expect(loginBtn).toBeInTheDocument();
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole("button", { name: "Logout" });
        expect(logoutBtn).toBeInTheDocument();
    });
});
