import { render, screen } from "@testing-library/react";
import Map from "./Map";

test("renders learn react link", () => {
  render(<Map position={{ lat: -34.5, lng: 53.0 }} />);
  //   const linkElement = screen.getByPlaceholderText(/Name/i);
  //   expect(linkElement).toBeInTheDocument();
});
