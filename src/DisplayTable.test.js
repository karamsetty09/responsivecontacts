import { render, screen } from "@testing-library/react";
import DisplayTable from "./DisplayTable";
import TestData from "./TestData.json";

test("Display for empty data", () => {
  render(<DisplayTable data={[]} />);
  const Header = screen.getByText(/No Records found/i);
  expect(Header).toBeInTheDocument();
});

test("Display of Header Text", () => {
  render(<DisplayTable data={[]} />);
  const HeaderAddress = screen.getByText(/Address/i);
  expect(HeaderAddress).toBeInTheDocument();
});

test("Display of Data", () => {
  render(<DisplayTable data={TestData} />);
  const Name = screen.getByText(/Leanne Graham/i);
  expect(Name).toBeInTheDocument();
});
