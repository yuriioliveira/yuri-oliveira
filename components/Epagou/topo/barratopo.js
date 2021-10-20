import Header from '../topo/header'
import Topbar from '../topo/topbar/topbar'
import LogoSearch from '../topo/logoSearch/logoSearch'

function barraTopo(){
    return(
        <div>
            <Header/>
            <Topbar/>
            <LogoSearch/>
        </div>
    )
}

export default barraTopo