import Header from '../components/header';
import Topo from '../components/topo';
import Topbar from '../components/Ecomprei/topo/topbar'

function ecomprei(){
    return(
        <div>
            <Header/>
            <p>Topo normal</p>
            <Topo/>
            <p>Topbar</p>
            <Topbar/>
            <h1>Ecomprei</h1>
        </div>
    )
}

export default ecomprei