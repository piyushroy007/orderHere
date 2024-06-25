import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/swiggyApiMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should test search functionality of Body Component for Pizza", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const beforeSearchCards = screen.getAllByTestId("resCard");
    expect(beforeSearchCards.length).toBe(20);
    const searchBtn = screen.getByRole("button", {
        name: "Search",
    });
    const clearBtn = screen.getByRole("button", {
        name: "Clear",
    });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(3);
    fireEvent.click(clearBtn);
    const afterClearCards = screen.getAllByTestId("resCard");
    expect(afterClearCards.length).toBe(20);
});

it("Should test top rated restaurant functionality of Body Component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const beforeSearchCards = screen.getAllByTestId("resCard");
    expect(beforeSearchCards.length).toBe(20);
    const topRatedBtn = screen.getByRole("button", {
        name: "Top Rated Restuarants",
    });
    fireEvent.click(topRatedBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(11);
});
