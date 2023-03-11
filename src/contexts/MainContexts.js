import { createContext, useEffect } from "react";
import { useState } from 'react';
import BrandDatas from '../brand.json';


export const MainContext = createContext();

const Provider = ({ children }) => {

    const brandDatas = [];

    Object.keys(BrandDatas).map(brand => {
        brandDatas.push(BrandDatas[brand]);
    });

    const [brands, setBrand] = useState(brandDatas);
    const [selectedBrands, setselectedBrands] = useState([]);

    const [copied, setCopied] = useState(false);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopied(false)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [copied]);


    useEffect(() => {

        if (search !== '') {
            setBrand(brandDatas.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())));
        }
        else {
            setBrand(brandDatas);
        }

    }, [search])


    const data = {
        brands,
        setBrand,
        selectedBrands,
        setselectedBrands,
        setCopied,
        copied,
        search,
        setSearch
    }


    return (
        <>
            <MainContext.Provider value={data}>
                {children}
            </MainContext.Provider>
        </>
    )

}

export default Provider;