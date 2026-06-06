import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { OrderDashboard } from "../src/features/orders/OrderDashboard";

test("renders order dashboard", async () => {
  render(<OrderDashboard />);
  expect(screen.getByText("Release and fulfillment queue")).toBeInTheDocument();
  expect(await screen.findByText("ord-9001")).toBeInTheDocument();
});
