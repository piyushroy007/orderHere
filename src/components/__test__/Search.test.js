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

it("Should test search functionality of Body Component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const searchBtn = screen.getByRole("button", {
        name: "Search",
    });
    const searchInput = screen.getByTestId("searchInput");
    // const resName = await screen.findByText("Pizza Hut");

    fireEvent.change(searchInput, { target: { value: "Pizza" } });

    const resCardList = screen.getAllByTestId("resCard");

    expect(resCardList.length).toBe(20);
    expect(searchBtn).toBeInTheDocument();
    // expect(resName).toBeInTheDocument();
});
