import Image from 'next/image';
import estilo from './logoSearch.module.css';
import LogoEcomprei from '../../../public/logoEcomprei.png'
import TextField from '@material-ui/core/TextField';


function logoSearch() {
    return (
        <div>
            <div className={estilo.arealogo}>
                <Image className={estilo.logotipo} src={LogoEcomprei} alt="Logotipo ALT" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
            </div>
        </div>
    )
}

export default logoSearch