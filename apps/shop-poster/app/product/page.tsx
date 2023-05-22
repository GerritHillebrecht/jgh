import Link from 'next/link';
import ContentContainer from '../../components/content-container';
import Image from 'next/image';

interface Product {
  id: number;
  userId: number;
  title: string;
  description: string;
  images: string[];
  brand: string;
  price: string;
}

export default async function ProductPage() {
  const { products }: { products: Product[] } = await fetch(
    `https://dummyjson.com/products?limit=7`
  ).then((res) => res.json());

  const updatedProducts = products.map((product: Product) => {
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });

    return {
      ...product,
      price: formatter.format(Number(product.price)),
    };
  });

  return (
    <ContentContainer>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {updatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="first-of-type:col-span-2 first-of-type:row-span-2 relative aspect-[16/12] first-of-type:aspect-auto"
          >
            <div className="rounded-xl overflow-hidden isolate border-[1px] border-solid border-stone-200 p-4 relative w-full h-full flex flex-col justify-end">
              <Image
                src={product.images[0]}
                className="absolute inset-0 w-full h-full object-cover -z-10"
                alt={`${product.title} - ${product.brand}`}
                fill={true}
              />

              <span className="bg-stone-50 px-3 py-1 rounded-3xl text-stone-700 w-[max-content]">
                ab {product.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="divider">OR</div>
    </ContentContainer>
  );
}
