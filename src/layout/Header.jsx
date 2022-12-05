function Header() {
  return (
    <header className="px-4 py-5 shadow-lg mb-2 border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-neutral-700 font-black text-center mb-5 md:mb-0">
          Rick and Morty <span className="text-gray-500">API</span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
