import { useContext } from "react";
import { MainContext } from "../contexts/MainContexts";
import { getContrastYIQ } from '../helpers';

const Copied = () => {

    const { copied } = useContext(MainContext);

    return (

        <>

            {copied && <div className="copied" style={{ '--bgColor': `#${copied}`, '--textColor': `${getContrastYIQ(copied)}` }}  >
                Copied <b>{copied}</b> to Clipboard
            </div>
            }

        </>
    )
}

export default Copied;