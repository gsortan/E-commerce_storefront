
import ProductCard from "./components/ProductCard";
import { getAllProducts } from "@/services/product/productServices";

export default async function ShopPage({searchParams}) {

  const unwrappedParams = await searchParams;

  const items = await getAllProducts(unwrappedParams.q);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[70rem] mx-auto p-8">
      {items.map(item => <ProductCard key={item.id} item={item} />)}
    </div>
  );
}