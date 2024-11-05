import Link from "next/link";


function Countries() {
    const countries = [
        { name: "Canada", href: "/countries/canada" },
        { name: "UK", href: "/countries/uk" },
        { name: "England", href: "/countries/england" },
        { name: "Australia", href: "/countries/australia" },
        { name: "Thailand", href: "/countries/thailand" },
    ];

    return (
        <>
        <div className="flex flex-col  min-h-screen bg-white  relative">
        <div className="absolute inset-0 bg-cover bg-center"  >
                <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-14 relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Countries Information</h1>
            <ul className="space-y-4 font-semibold">
                {countries.map((country) => (
                    <li key={country.name} className="pb-2">
                        <Link
                            href={country.href}
                            className="flex items-center p-2 text-blue-600 rounded hover:bg-blue-50 transition duration-300 ease-in-out"
                        >
                            {country.name}
                            <span className="ml-auto text-gray-500">➔</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        </>
    );
}

export default Countries;