import Header from '../topo/header'
import Topbar from '../topo/topbar/topbar'
import LogoSearch from '../topo/logoSearch/logoSearch'
import MenuTopo from '../topo/menu/menu'

function barraTopo(){
    return(
        <div>
            <Header/>
            <Topbar/>
            <LogoSearch/>
            <MenuTopo/>
        </div>
    )
}

export default barraTopo