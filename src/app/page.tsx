import Link from "next/link";

export default function HomePage() {
    return (
        <>

        <div className="flex flex-col items-center justify-center min-h-screen bg-white rounded-lg relative">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center"  >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            <div className="relative z-10 p-6 bg-white rounded-lg shadow-lg max-w-md">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Welcome to Our World!</h1>
                <p className="text-gray-700 mb-4 text-center">
                    Discover information about various countries and explore their cultures.
                </p>
                <Link 
                    href="/countries" 
                    className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Explore Countries
                </Link>
                
                {/* Assignment Note */}
                <p className="text-center text-gray-600 mt-6 italic">Assignment by Jasmine Sheikh</p>
            </div>
        </div>
        </>
    )
}