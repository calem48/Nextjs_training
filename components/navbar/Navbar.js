import Link from "next/link";

function Navbar() {
  return (
    <>
      <ul style={{ display: "flex", gap: "50px" }}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/products">products</Link>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
