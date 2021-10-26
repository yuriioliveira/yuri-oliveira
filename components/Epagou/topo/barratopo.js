import Header from '../topo/header'
import Topbar from '../topo/topbar/topbar'
import LogoSearch from '../topo/logoSearch/logoSearch'
import Menu from '../topo/menu/menu'

function barraTopo(){
    return(
        <div>
            <Header/>
            <Topbar/>
            <LogoSearch/>
            <Menu/>
        </div>
    )
}

export default barraTopo