"use client";
//types
import { IProduct } from "@/interfaces/IProduct";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { cartContext } from "@/contexts/cartContext";
import Link from "next/link";

interface IDetailProps {
  product: IProduct;
}
const Detail = ({ product }: IDetailProps) => {
  const { isLogged } = useContext(UserContext);
  const { cart, setCart } = useContext(cartContext);
  const isInCart = cart.some((p) => p.id === product.id);
  const router = useRouter();

  const handleBuy = () => {
    if (isLogged()) {
      alert("Added!");
      setCart([...cart, product]);
    } else {
      alert("First Login!");
      router.push("/login");
    }
  };

  return (
    <article className="bg-secondary w-full h-20 transition ease-in-ou delay-150 hover:scale-105">
      <h4>{product.name}</h4>
      {!isInCart ? (
        <button
          className="border-2 border-tertiary px- 4 py-2"
          onClick={handleBuy}
        >
          Add to Cart
        </button>
      ) : (
        <Link className="border-2 border-black" href="/cart">
          Buy your Cart
        </Link>
      )}
    </article>
  );
};

export default Detail;
