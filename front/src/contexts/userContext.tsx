"use client";

import { IOrder } from "@/interfaces/IOrder";
import { IUser } from "@/interfaces/IUser";
import { createContext, useContext, useEffect, useState } from "react";
import { cartContext } from "./cartContext";

//crear interfaces
interface IUserContextProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLogged: () => boolean;
  updateOrders: (order: IOrder) => void;
  logout: () => void;
}
//crear contexto
export const UserContext = createContext<IUserContextProps>({
  user: null,
  setUser: () => {},
  isLogged: () => false,
  updateOrders: () => {},
  logout: () => {},
});

// Crear Provider
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { clearCart } = useContext(cartContext);

  const [user, setUser] = useState<IUser | null>(null);
  // dentro del provider generar useEffect que sincronicen estados y localStorage
  // user cambia en el login, en ese punto, actualizamos el localstorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Luego en cada render, traemos el user del localstorage hacia user para sincronizarlo y persistir
  useEffect(() => {
    // chequear que esto se ejecute siempre en el cliente
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);

  const isLogged = () => {
    return user !== null;
  };

  const updateOrders = (order: IOrder) => {
    const newUser = user;
    newUser?.user.orders.push({
      id: order.id,
      status: order.status,
      date: order.date,
    });
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    clearCart();
  };
  // retornar dentro del provider todo lo que quiera compartir
  return (
    <UserContext.Provider
      value={{ user, setUser, isLogged, updateOrders, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
