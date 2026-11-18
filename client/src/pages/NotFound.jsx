import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-sm font-semibold tracking-[0.25em] text-[#A81028]">
        KAGAI INNOVATION TECHNOLOGY
      </span>

      <h1 className="mt-5 text-8xl font-bold text-[#081848]">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-[#202938]">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-[#737D8C]">
        The page you're looking for may have been moved,
        removed, or never existed.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-md bg-[#081848] px-7 py-3 text-white transition hover:bg-[#A81028]"
      >
        Return to Homepage
      </Link>
    </section>
  );
}