import React from 'react';
import Link from 'next/link';

interface CountryDetailProps {
    name: string;
    population: string;
    capital: string;
}
//React.FC: Ye ek type hai jo React function component ko define karta hai.
const CountryDetail = ({name,population,capital}: CountryDetailProps) => {
    return (
        <div className='pt-11 text-center'>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">{name}</h2>
            <p className="text-blue-600"><strong>POPULATION:</strong> {population}</p>
            <p className="text-blue-600"><strong>CAPITAL:</strong> {capital}</p>

            <button className="bg-blue-700  mt-10 text-lg px-6 py-2 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 
            items-center">
        <Link href={"/countries"}> Back</Link>{" "}
      </button>
        </div>
    );
};

export default CountryDetail;