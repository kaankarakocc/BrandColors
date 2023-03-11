import Search from './Search';
import Brand from './Brand';
import { MainContext } from '../contexts/MainContexts';
import { useContext } from 'react';
import LazyLoad from 'react-lazy-load';
import Download from './Download';

const Content = () => {

    const { brands, selectedBrands } = useContext(MainContext);

    return (
        <>
            <main className="content">
                <header className="header">
                    <Search />
                    {selectedBrands.length > 0 && <Download />}
                    
                </header>
                <section className='brands'>
                    {brands.map((brand, index) => {
                        return (<LazyLoad key={index} offset={0} width={`${100}%`} height={120}>
                            <Brand key={index} brand={brand} />
                        </LazyLoad>)
                    })}
                </section>
            </main>
        </>
    )
}

export default Content;