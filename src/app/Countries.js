"use client"

import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
    
export default function Countries() {
    const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
                })
            .then(data => {
                setData(data)
                console.log("Countries are loading")
            })
            .catch(error => console.error('There was a problem with the fetch:', error));

            }, []);
                
            function searchUpdate() {
                const countriesCards = document.querySelectorAll(".country-container");
                const SearchBtn = document.getElementById("searchBtn");
                const searchInp = document.getElementById("searchBar").value;
                const countryNames = document.querySelectorAll(".country-name");    
                countryNames.forEach((name, index) => {
                    if (name.textContent.startsWith(searchInp.charAt(0).toUpperCase() + searchInp.slice(1))){
                        countriesCards[index].classList.remove("hide")
                        countriesCards[index].classList.add("show")
                    }
                    else {
                        countriesCards[index].classList.add("hide")
                        countriesCards[index].classList.remove("show")
                    }
                
                })
                    
                
            }

            function selectCatagorieAfrica(){
                const countriesCards = document.querySelectorAll(".country-container");
                data.forEach((country, index) => {
                    if (country.region === "Africa"){
                        countriesCards[index].classList.remove("hide");
                        countriesCards[index].classList.add("show");
                    }
                    else {
                        countriesCards[index].classList.add("hide");
                        countriesCards[index].classList.remove("show");
                    }
                })

            }
            function selectCatagorieAmerica(){
                const countriesCards = document.querySelectorAll(".country-container");
                data.forEach((country, index) => {
                    if (country.region === "America"){
                        countriesCards[index].classList.remove("hide");
                        countriesCards[index].classList.add("show")
                    }
                    else {
                        countriesCards[index].classList.add("hide");
                        countriesCards[index].classList.remove("show");
                    }
                })
            }
            function selectCatagorieAsia(){
                const countriesCards = document.querySelectorAll(".country-container");
                data.forEach((country, index) => {
                    if (country.region === "Asia"){
                        countriesCards[index].classList.remove("hide");
                        countriesCards[index].classList.add("show")
                    }
                    else {
                        countriesCards[index].classList.add("hide");
                        countriesCards[index].classList.remove("show");
                    }
                })
            }
            function selectCatagorieEurope(){
                const countriesCards = document.querySelectorAll(".country-container");
                data.forEach((country, index) => {
                    if (country.region === "Europe"){
                        countriesCards[index].classList.remove("hide");
                        countriesCards[index].classList.add("show")
                    }
                    else {
                        countriesCards[index].classList.add("hide");
                        countriesCards[index].classList.remove("show");
                    }
                })
            }
            function selectCatagorieOceania(){
                const countriesCards = document.querySelectorAll(".country-container");
                data.forEach((country, index) => {
                    if (country.region === "Oceania"){
                        countriesCards[index].classList.remove("hide");
                        countriesCards[index].classList.add("show")
                    }
                    else {
                        countriesCards[index].classList.add("hide");
                        countriesCards[index].classList.remove("show");
                    }
                })
            }

return (
    <>
    <header className="pt-[7rem] bg-[#202c37] fixed top-0 left-0 right-0 pb-[2rem]">
    <nav className="bg-[#202c37] flex flex-row justify-between px-[4rem] h-[56px]">
        <div className="flex flex-row gap-3 items-center bg-[#2b3945] px-[20px] py-[10px] rounded-lg w-[400px] h-[56px]">
            <Image src="./svg/search.svg" alt="search-icon" id="searchBtn" height={20} width={20}  /><input type="search" onChange={searchUpdate} placeholder="Search for a country..." className="text-white bg-[#2b3945] outline-none border-none w-full" id="searchBar" />
        </div>
        <details>
            <summary className="text-white relative list-none bg-[#2b3945] py-4 px-6 rounded-lg cursor-pointer mb-[6px]">Filter by Region</summary>
            <ul className="text-white absolute bg-[#2b3945] w-[167.89px] rounded-lg px-5 py-3 cursor-pointer">
                <li onClick={selectCatagorieAfrica}>Africa</li>
                <li onClick={selectCatagorieAmerica}>America</li>
                <li onClick={selectCatagorieAsia}>Asia</li>
                <li onClick={selectCatagorieEurope}>Europe</li>
                <li onClick={selectCatagorieOceania}>Oceania</li>
            </ul>
        </details>
    </nav>
    </header>
        <main className="bg-[#202c37] grid gap-[4rem] text-white min-h-screen grid-cols-3 desktop:grid-cols-4 px-[4rem] py-5 pt-[200px] font-nunito">
            {data.map((country, index) => (
            <Link key={index} href={`/${index}`}>
                <div className="country-container">
                    <Image src={country.flags.png} height={150} width={320} alt={country.flags.alt} className="h-[150px] w-[320px] rounded-tl-lg rounded-tr-lg" />
                    <h2 className="country-name">{country.name.common}</h2>
                    <div className="text-sm">
                        <p>Population: <span className="text-[#fafafab8]">{country.population}</span></p>
                        <p>Region: <span className="text-[#fafafab8]">{country.region}</span></p>
                        <p>Capital: <span className="text-[#fafafab8]">{country.capital ? country.capital : "This country has no capital"}</span></p>
                    </div>
                </div>
            </Link>
            ))}
        </main>
        
    </>
)
    

}


