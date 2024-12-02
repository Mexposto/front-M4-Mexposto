"use client";

import { UserContext } from "@/contexts/userContext";
import { IOrder } from "@/interfaces/IOrder";
import { notFound } from "next/navigation";
import { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    notFound();
  }
  const { name, email, orders } = user.user;
  return (
    <div>
      <h1>Dashboard</h1>
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Orders:</h4>
      {orders.map((order: IOrder, i) => (
        <div className="flex w-full gap-2" key={i}>
          <p>{order.id}</p>
          <p>{order.status}</p>
          <p>{order.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
