import { render, screen } from "@testing-library/react";
import { OrderDashboard } from "../src/features/orders/OrderDashboard";

test("renders the orders heading", () => {
  render(<OrderDashboard />);
  expect(screen.getByText("Loading orders...")).toBeTruthy();
});
