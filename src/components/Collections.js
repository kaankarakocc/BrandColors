import Brand from './Brand';
import { MainContext } from '../contexts/MainContexts';
import { useContext, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import Download from './Download';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr'

const Collections = () => {

    const { brands, selectedBrands, setselectedBrands } = useContext(MainContext);
    const { slugs } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        setselectedBrands(slugs.split(','));
    }, []);

    const closeCollection = () => {
        setselectedBrands([]);
        navigate.push('/')
    }

    return (
        <>
            <main className="content">
                <header className="header">
                    <Link to='/' onClick={closeCollection}>
                        <a className='back-btn'>
                            <GrLinkPrevious />
                            All Brands
                        </a>
                    </Link>

                    {selectedBrands.length > 0 && <Download />}
                </header>
                <section className='brands'>
                    {selectedBrands.map((slug, index) => {
                        let brand = brands.find(b => b.slug === slug)
                        return (<LazyLoad key={index} offset={0} width={`${100}%`} height={120}>
                            <Brand key={index} brand={brand} />
                        </LazyLoad>)
                    })}
                </section>
            </main>
        </>
    )
}

export default Collections;