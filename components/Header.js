import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-800 text-white flex justify-between p-4">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
