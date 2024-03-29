import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortingDecks from "../SortingDecks";

describe("SortingDecks component", () => {
  test("renders sorting options correctly", () => {
    render(<SortingDecks sort="" onSortChange={() => {}} />);

    const defaultOption = screen.getByText("DEFAULT");
    const ascOption = screen.getByText("Name ASC (A-Z)");
    const descOption = screen.getByText("Name DESC (Z-A)");

    expect(defaultOption).toBeInTheDocument();
    expect(ascOption).toBeInTheDocument();
    expect(descOption).toBeInTheDocument();
  });

  test("invokes onSortChange callback correctly", () => {
    const onSortChangeMock = jest.fn();
    render(<SortingDecks sort="" onSortChange={onSortChangeMock} />);

    const selectElement = screen.getByRole("combobox");

    userEvent.selectOptions(selectElement, "name:asc");

    expect(onSortChangeMock).toHaveBeenCalledTimes(1);
    expect(onSortChangeMock).toHaveBeenCalledWith("name:asc");
  });
});
