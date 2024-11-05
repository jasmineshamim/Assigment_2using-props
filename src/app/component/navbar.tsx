import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-end space-x-8 text-white">
                <li className="hover:text-blue-100 hover:underline decoration-white"><Link href="/">Home</Link></li>
                <li className="hover:text-blue-100 hover:underline decoration-white"><Link href="/aboutPage">About</Link></li>
                <li className="hover:text-blue-100 hover:underline decoration-white"><Link href="/countries">Countries Info</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;