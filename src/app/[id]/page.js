
import Link from "next/link";
import Image from "next/image";

async function fetchData(){
    const res = await fetch("https://restcountries.com/v3.1/all")
    return await res.json()
}

export default async function Page({ params }) {
    const data = await fetchData()
    const countryIndex = params.id;
    const country = data[countryIndex];
    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <main className="h-screen">
            <header className="bg-[#202c37] pt-[4rem]">
            <nav className="pl-[3.5rem] pt-[2rem]"><button><Link href="/" className="bg-[#2b3945] flex flex-row items-center px-5 py-3 gap-2 text-white shadow-md rounded-lg"><Image src="./svg/back.svg" width={20} height={20} alt="back button" />Back</Link></button></nav>
        </header>
        <main className="bg-[#202c37] flex flex-col justify-center items-center h-full px-[4rem] py-5 text-white font-nunito">
            <div key={params.id} className="flex flex-row gap-10 bg-[#202c37] shadow-sm">
                <Image alt="flags" src={country.flags.svg} width={380} height={280} />
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl text-white">{country.name}</h2>
                    <div className="text-sm flex-row flex gap-3">
                        <div className="flex flex-col gap-3">
                            <p>Native Name: <span className="text-[#fafafab8]">{country.name.nativeName}</span></p>
                            <p>Population: <span className="text-[#fafafab8]">{country.population}</span></p>
                            <p>Region: <span className="text-[#fafafab8]">{country.region}</span></p>
                            <p>Sub Region: <span className="text-[#fafafab8]">{country.subregion}</span></p>
                            <p>Capital: <span className="text-[#fafafab8]">{country.capital ? country.capital : "This country has no capital"}</span></p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Top Level Domain: <span className="text-[#fafafab8]">{country.topLevelDomain}</span></p>
                            <p>Currencies: <span className="text-[#fafafab8]">{country.currencies[0].name}</span></p>
                            <p>Languages: <span className="text-[#fafafab8]">{country.languages[0].name}</span></p>
                        </div>
                    </div>
                    <div className="pt-5 flex gap-2 flex-row items-center">
                        <p>Border Countries: </p>
                        <div className="text-[#fafafab8] flex flex-row gap-3">{country.borders.map((borderr, index) => (
                            <span key={index} className="text-[#fafafab8] bg-[#2b3945] px-3 rounded-md py-1 shadow-lg"> {borderr}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </main>
    );
}
