export default function Header() {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl md:text-4xl font-bold text-custom-dark">
        Karl Christoper Cusi
      </h1>
      <p className="text-lg font-semibold text-custom-slate">
        Full Stack Developer
      </p>
      <p className="text-md text-custom-slate">
        I build user-friendly web applications.
      </p>
    </header>
  );
}
