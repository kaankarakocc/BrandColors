import { getContrastYIQ } from '../helpers';
import { MainContext } from '../contexts/MainContexts';
import { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Brand = ({ brand }) => {

    const { selectedBrands, setselectedBrands, setCopied } = useContext(MainContext);

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setselectedBrands(selectedBrands.filter(slug => slug !== brand.slug));
        }
        else {
            setselectedBrands([...selectedBrands, brand.slug]);
        }
        
    }


    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''} `}>
            <h5 onClick={() => toggleSelected()}>
                {brand.title}
            </h5>
            <div className="brand-colors">
                {brand.colors.map((color, index) => (
                    <CopyToClipboard key={index} text={color} onCopy={() => setCopied(color)}>
                        <span key={index} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
                            {color}
                        </span>
                    </CopyToClipboard>
                ))}
            </div>
        </div>
    )
}

export default Brand;
