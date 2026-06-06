import { invoices } from "../data/billing";
import { customers } from "../data/customers";
import { fromFixture } from "../lib/api";
import { customerRiskScore } from "../lib/risk";

export async function listCustomersWithRisk() {
  return fromFixture(
    customers.map((customer) => ({
      customer,
      riskScore: customerRiskScore(customer, invoices)
    }))
  );
}

export function getCustomerName(customerId: string): string {
  return customers.find((customer) => customer.id === customerId)?.name ?? "Unknown customer";
}
