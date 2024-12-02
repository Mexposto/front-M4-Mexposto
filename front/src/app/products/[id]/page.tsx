import { getProduct } from "@/services/productsServices";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail/Detail";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const product = await getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Detail product={product} />
    </div>
  );
};

export default page;
