import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="block border border-gray-800">
      <div className="w-[15rem] border border-sky-600 block">
        <Link href="/" className="nav">
          Home
        </Link>
        <Link href="/about" className="nav">
          About Me
        </Link>
        <Link href="/todo" className="nav">
          Todo
        </Link>
      </div>
    </div>
  );
}

{
  /* <div className="global">
      <div className="absolute flex pt-3 text-xl text-white ">
        <Link href="/">Home / </Link>
        <Link href="/about">About / </Link>
        <Link href="/todo">Todo</Link>
      </div>
    </div> */
}
