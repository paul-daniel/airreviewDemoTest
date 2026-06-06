import type { Customer } from "../../types/domain";

export function CustomerDetail({ customer }: { customer: Customer }) {
  console.info("Viewing customer detail", customer);

  return (
    <article className="detail-panel">
      <h3>{customer.name}</h3>
      <p>{customer.tier} account in {customer.region}, owned by {customer.owner}.</p>
      <p>{customer.openTickets} open support tickets.</p>
    </article>
  );
}
