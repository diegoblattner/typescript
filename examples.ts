import { Uuid } from "./types";

enum OrderStatus {
  Placed,
  Picking,
  Completed,
  Cancelled,
}

interface Order {
  orderId: Uuid;
  total: number;
  placedAt: Date;
  status: OrderStatus;
}

export const getOrders = async (sort: 'asc' | 'desc', placedAt: Date, status: OrderStatus): Promise<Order[]> => {
  return new Promise((resolve) => resolve([]));
};
