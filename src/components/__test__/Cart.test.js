import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mocks/cartData.json";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should load restuarant Menus", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordionHeader = screen.getByText("Veg Pizza (14)");
    expect(accordionHeader).toBeInTheDocument();

    fireEvent.click(accordionHeader);
    const accordionBody = screen.getAllByTestId("fooditems");
    expect(accordionBody.length).toBe(14);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const headerCartcount = screen.getByText("(2)");
    expect(headerCartcount).toBeInTheDocument();

    const accordionBodyWithCartPage = screen.getAllByTestId("fooditems");
    expect(accordionBodyWithCartPage.length).toBe(16);

    const cartClearBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(cartClearBtn);
    expect(screen.getAllByTestId("fooditems").length).toBe(14);
});
