
import CountryDetail from "@/app/component2/CountryDetail";

type CountryKeys = 'canada' | 'uk' | 'england' | 'australia' | 'thailand';

const countryData: Record<CountryKeys, { name: string; population: string; capital: string }> = {
    canada: {
        name: "Canada",
        population: "10.973 million",
        capital: "Ottawa"
    },
    uk: {
        name: 'United Kingdom',
        population: '67 million',
        capital: 'London'
    },
    england: {
        name: 'England',
        population: '56 million',
        capital: 'London'
    },
    australia: {
        name: 'Australia',
        population: '25 million',
        capital: 'Canberra'
    },
    thailand: {
        name: 'Thailand',
        population: '70 million',
        capital: 'Bangkok'
    },
};

export default function CountriesInfo({ params }: { params: { country_name: string } }) {
    const countryName = params.country_name.toLowerCase() as CountryKeys; // Assert type to CountryKeys

    const country = countryData[countryName];

    return (
     
        <div className="flex flex-col  min-h-screen bg-white  relative">
            <div className="absolute inset-0 bg-cover bg-center"  >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="mt-36 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg  relative z-10">{country ? (
                    <CountryDetail 
                        name={country.name} 
                        population={country.population} 
                        capital={country.capital} 
                    />
                ) : (
                    <div className="max-w-md mx-auto p-6 bg-red-100 rounded-lg shadow-lg mt-10">
                        <h1 className="text-xl font-bold text-red-600 text-center">Country not found!</h1>
                    </div>
                )}
            </div>
           
        </div>
      
    );
}