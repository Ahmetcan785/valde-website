import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Nav />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}
