import { render, screen } from "@testing-library/react";
import ResturantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resListData.json";
import "@testing-library/jest-dom";

describe("test cases for Restaurant Card Component", () => {
    it("Should render each Restaurant Card", () => {
        // Passing props to component
        render(<ResturantCard resData={MOCK_DATA} />);
        const resName = screen.getByText("KFC");
        expect(resName).toBeInTheDocument();
    });

    it("Should render Restaurant Card with Label", () => {
        // Passing props to component
        render(<ResturantCard resData={MOCK_DATA} />);
        const resName = screen.getByText("KFC");
        expect(resName).toBeInTheDocument();
    });
});
