import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello world as atext", () => {
    //arrange
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello world", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Nima gap", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("Nima gap", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Ozgardi", () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    const btnEl = screen.getByText("Ozgardi", { exact: false });
    expect(btnEl).toBeInTheDocument();
  });

  test("does not render Nima gap", () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    const outputElement = screen.queryByText("Nima gap");
    expect(outputElement).toBeNull();

  });
});
