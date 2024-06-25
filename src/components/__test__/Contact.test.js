import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
    test("Should load contact us component", () => {
        render(<Contact />); // rendering the contact component in js dom first

        const heading = screen.getByRole("heading");
        //this is assertion
        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside contact component", () => {
        render(<Contact />); // rendering the contact component in js dom first

        const button = screen.getByRole("button");

        //another way to find a button inside contact component
        // test inside function getByTest() in case sensitive
        const buttonSub = screen.getByText("Submit");

        //this is assertion
        expect(button).toBeInTheDocument();
        expect(buttonSub).toBeInTheDocument();
    });

    it("Should have an input field with placholder name inside contact component", () => {
        render(<Contact />); // rendering the contact component in js dom first

        const inputName = screen.getByPlaceholderText("Name");

        //this is assertion
        expect(inputName).toBeInTheDocument();
    });

    test("Should load 4 input boxes in contact component", () => {
        render(<Contact />); // rendering the contact component in js dom

        const inputBoxes = screen.getAllByRole("textbox");

        // console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(4);
    });
});
