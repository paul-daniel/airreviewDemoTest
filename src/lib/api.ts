import { useEffect, useState } from "react";

export interface Order {
  id: string;
  customer: string;
  total: number;
}

const ORDERS: Order[] = [
  { id: "ord_1", customer: "Contoso", total: 3200 },
  { id: "ord_2", customer: "Fabrikam", total: 1800 },
  { id: "ord_3", customer: "Northwind", total: 4200 }
];

export async function fetchOrders(): Promise<Order[]> {
  return Promise.resolve(ORDERS);
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchOrders().then((items) => {
      if (active) {
        setOrders(items);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { orders, loading };
}
