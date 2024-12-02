import { getProduct } from "@/services/productsServices";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail/Detail";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
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
