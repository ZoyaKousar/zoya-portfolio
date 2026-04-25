import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] px-6 py-24 flex items-center justify-center">
      <div className="max-w-xl w-full text-center rounded-3xl bg-[#2F2F8A]/10 border border-white/10 backdrop-blur-md p-10">
        <p className="text-white/70 tracking-wide text-sm mb-3">404</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Page not found
        </h1>
        <p className="text-white/75 mt-4">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="text-white text-center px-6 py-3 rounded-[50px] bg-gradient-primary bg-gradient-primary-hover transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/Blog"
            className="bg-gray-700 text-center text-white px-6 py-3 rounded-[50px] hover:bg-fuchsia-500 transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

