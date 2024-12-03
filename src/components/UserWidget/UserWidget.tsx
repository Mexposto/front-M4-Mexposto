"use client";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import Link from "next/link";
import { cartContext } from "@/contexts/cartContext";
import { useRouter } from "next/navigation";

const UserWidget = () => {
  const { isLogged, user, logout } = useContext(UserContext);
  const { cart } = useContext(cartContext);
  const router = useRouter();
  return (
    <div>
      {isLogged() ? (
        <div className="h-full flex items-center gap-2">
          <Link href="/dashboard" className="text-xs">
            {user?.user.name}
          </Link>
          <Link href="/cart" className="text-xs">
            {`Cart${cart.length > 0 ? "(" + cart.length + ")" : ""}`}
          </Link>
          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="text-xs"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserWidget;
