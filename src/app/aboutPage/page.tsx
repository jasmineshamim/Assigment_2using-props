
import Link from "next/link";
export default  function About(){
    return(
        <>
        <div className="flex flex-col  min-h-screen bg-white  relative">
        <div className="absolute inset-0 bg-cover bg-center"  >
                <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h2 className="mt-52 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg  text-blue-800 text-center text-3xl  relative z-10">
            About Page
            <div>
            <button className="bg-blue-700  mt-10 text-lg px-6 py-2 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 
            items-center">
        <Link href={"/countries"}> Back</Link>{" "}
      </button>
            </div>
        </h2>
       </div>
        </>
    );
};