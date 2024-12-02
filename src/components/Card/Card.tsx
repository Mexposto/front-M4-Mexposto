import Link from "next/link";
//types
import { ICardProps } from "../../interfaces/ICardProps";

const Card = ({ product }: ICardProps) => {
  return (
    <Link href={`products/${product.id}`}>
      <article className="bg-secondary w-full h-20 transition ease-in-ou delay-150 hover:scale-105">
        <h4>{product.name}</h4>
        <h3>${product.price}</h3>
      </article>
    </Link>
  );
};

export default Card;
