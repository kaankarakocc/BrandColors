import { GrSearch } from 'react-icons/gr'
import { MainContext } from '../contexts/MainContexts';
import { useContext } from 'react';

const Search = () => {

    const { setSearch } = useContext(MainContext);

    return (
        <>
            <div className="search">
                <div className='icon'>
                    <GrSearch />
                </div>
                <input type={"text"} placeholder="Search Brands" onChange={(e) => setSearch(e.target.value)} />
            </div>
        </>
    )
}

export default Search;