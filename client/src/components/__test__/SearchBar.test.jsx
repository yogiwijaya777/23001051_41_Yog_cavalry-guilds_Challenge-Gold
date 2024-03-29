import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("renders the input field with the correct value", () => {
    const inputValue = "Test Value";
    render(<SearchBar value={inputValue} onQueryChange={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(inputValue);
  });

  it("renders the label with the correct name", () => {
    const name = "Test Name";
    render(<SearchBar name={name} value="" onQueryChange={() => {}} />);
    const labelElement = screen.getByText(name);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("input-group-text");
  });

  it("calls the onQueryChange callback when the input value changes", () => {
    const onQueryChange = jest.fn();
    render(<SearchBar value="" onQueryChange={onQueryChange} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(onQueryChange).toHaveBeenCalledWith("New Value");
  });

  it("renders the input field with the correct classes", () => {
    render(<SearchBar value="" onQueryChange={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("form-control");
    const inputGroupElement = inputElement.closest(".input-group");
    expect(inputGroupElement).toBeInTheDocument();
  });
});
