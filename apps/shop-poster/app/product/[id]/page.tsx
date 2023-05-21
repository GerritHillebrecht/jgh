import Link from 'next/link';
import ProductGallery from './gallery';

interface Product {
  id: number;
  userId: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  thumbnail: string;
}

export async function generateStaticParams() {
  const { products }: { products: Product[] } = await fetch(
    `https://dummyjson.com/products`
  ).then((res) => res.json());

  return products.map((product) => ({
    params: { id: product.id.toString() },
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await fetch(
    `https://dummyjson.com/products/${params.id}`
  ).then((res) => res.json());

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Link href="/product">
        <div className="flex items-center gap-2 h-14 sm:h-16">
          <ChevronLeftIcon /> Produktübersicht
        </div>
      </Link>
      <div className="grid grid-cols-[2fr,1fr] min-h-[300px] gap-x-8">
        <div className="grid grid-rows-[auto,max-content] sticky top-0 gap-4">
          <div className="image grid place-items-center border-[1px] border-solid border-stone-200 overflow-hidden rounded-xl">
            <ProductGallery images={product.images} />
          </div>
          <div className="thumbs">
            <picture>
              <source srcSet={product.thumbnail} type="image/jpeg" />
              <img
                className="max-w-[150px] max-h-[150px]"
                src={product.thumbnail}
                alt="Picture of the author"
              />
            </picture>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col gap-3">
            <p>
              <span className="text-3xl font-bold block">
                ab {product.price} €
              </span>
              <span>Inkl. lokaler Steuern</span>
            </p>
            <h2 className="text-lg capitalize">{product.title}</h2>
            <p>{product.description}</p>

            <div className="grid grid-cols-[max-content,1fr] gap-2">
              <CheckIcon />
              <p className="text-sm">
                Schnelle Lieferung! Erhalte es am 25. Mai-02. Jun , wenn du
                heute bestellst
              </p>
            </div>
            <div className="grid grid-cols-[max-content,1fr] gap-2">
              <CheckIcon />
              <p className="text-sm">
                Rückgaben und Umtausch werden akzeptiert
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs opacity-75 text-center">
                Shoppe jetzt. Bezahle in bis zu 30 Tagen mit <b>Klarna</b>.
                <span className="underline ml-1">Mehr erfahren</span>
              </p>
              <button
                className="block w-full py-3 text-center rounded-3xl text-white bg-stone-800 font-bold hover:bg-stone-700 hover:scale-[1.01]"
                style={{ transition: 'all ease-in-out 100ms' }}
              >
                In den Warenkorb
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
        clipRule="evenodd"
      />
    </svg>
  );
}
