import { GrDownload, GrLink, GrClose } from 'react-icons/gr';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../contexts/MainContexts';

const Download = () => {

    const { selectedBrands, brands, setselectedBrands } = useContext(MainContext);
    const [donwloadUrl, setDownloadUrl] = useState('');
    const [cssMethod, setCssMethod] = useState('css');

    useEffect(() => {
        let output = "";
        if (selectedBrands.length > 0) {
            switch (cssMethod) {
                case 'css':
                    output += ':root {\n'
                    selectedBrands.map(slug => {
                        let brandArr = brands.find(b => b.slug === slug);

                        output += `/*------------------${slug}----------------*/\n`

                        brandArr.colors.map((color, key) => {
                            output += `--${slug}-${key} : #${color};\n`;
                        });
                    });
                    output += '}'
                    break;
                case 'scss':

                    selectedBrands.map(slug => {
                        let brandArr = brands.find(b => b.slug === slug);

                        output += `/*------------------${slug}----------------*/\n`

                        brandArr.colors.map((color, key) => {
                            output += `\$${slug}-${key} : #${color};\n`;
                        });
                    });
                    break;
                case 'less':

                    selectedBrands.map(slug => {
                        let brandArr = brands.find(b => b.slug === slug);

                        output += `/*------------------${slug}----------------*/\n`

                        brandArr.colors.map((color, key) => {
                            output += `@${slug}-${key} : #${color};\n`;
                        });
                    });
                    break;
                default:
                    break;

            }
            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
            return () => {
                URL.revokeObjectURL(url);
                setDownloadUrl('');
            }
        }


    }, [selectedBrands, cssMethod]);

    const getLink = () => {

        prompt("Here's the URL to share", `http://localhost:3000/collections/${selectedBrands.join(',')}`)
    }

    return (
        <>
            <div className="download">
                <div className='actions'>
                    <select onChange={(e) => setCssMethod(e.target.value)}>
                        <option value={'css'}>CSS</option>
                        <option value={'scss'}>SCSS</option>
                        <option value={'less'}>LESS</option>
                    </select>
                    <a download={`test.${cssMethod}`} href={donwloadUrl}>
                        <GrDownload />
                    </a>
                    <button onClick={() => getLink()}>
                        <GrLink />
                    </button>
                </div>
                <div className="selected" onClick={() => setselectedBrands([])}>
                    <GrClose />
                    <p> {selectedBrands.length} brand collected</p>
                </div>
            </div>
        </>
    )
}

export default Download;