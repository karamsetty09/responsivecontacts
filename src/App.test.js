import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Display of Header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Resonate Contact List/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
