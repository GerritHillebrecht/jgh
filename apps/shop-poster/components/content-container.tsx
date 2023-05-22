export default function ContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 text-gray-900">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Data to enrich your</span>{' '}
          <span className="block text-indigo-600 xl:inline">
            online business
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-500">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
        <div className="text-stone-700 mt-6">{children}</div>
      </div>
    </div>
  );
}
