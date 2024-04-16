import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="p-8 my-6 text-center rounded-md bg-slate-800">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="mt-4 text-2xl font-bold text-white">Logged</h1>
        </Link>
        <p className="text-slate-300">
          Where Your Errors are logged and solved.
        </p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="py-6 mt-12 text-center border-t border-slate-400 text-slate-400">
        <h3>Davana</h3>
      </div>
    </footer>
  );
  return (
    <html>
      <head />
      <body>
        <main className="max-w-2xl px-6 mx-auto">
          {header}
          {children}
          {footer}
        </main>
      </body>
    </html>
  );
}
