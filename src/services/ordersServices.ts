import { IProduct } from "@/interfaces/IProduct";
import { IUser } from "@/interfaces/IUser";

const apiURL = process.env.API_URL || "http://localhost:3001";

export const buyOrder = async (cart: IProduct[], user: IUser) => {
  const data = {
    userId: user.user.id,
    products: cart.map((product) => product.id),
  };

  const res = await fetch(`${apiURL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: user.token,
    },
  });
  return res.json();
};
