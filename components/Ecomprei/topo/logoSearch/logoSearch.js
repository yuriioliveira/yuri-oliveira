import React from 'react'
import Image from 'next/image'
import estilo from './logoSearch.module.css'
import LogoEcomprei from '../../../../public/logoEcomprei.png'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Script from 'next/script'

function logoSearch() {

    return (
        <div className={estilo.root}>
            <div className={estilo.areaGeral}>
              <div>
                <Image src={LogoEcomprei} alt="Logotipo ALT" />
              </div>
              <div className={estilo.areaBusca}>
                <SearchIcon className={estilo.iconSearch} />
                <input id="inputBusca" type="text"name="busca" placeholder="O que você procura?" className={estilo.campoBusca} />
               </div>
              <div className={estilo.areaCliente}>
                <div>
                  <PersonOutlineIcon className={estilo.iconCadastro}/>
                </div>
                <div>
                  <p className={estilo.p}>Olá visitante</p>
                  <p className={estilo.p}>Cadastre-se</p>
                </div>
              </div>
              <div className={estilo.iconCarrinho}>
                <ShoppingCartIcon />
                <p>0</p>
              </div>
            </div>
            <Script id="show-banner" strategy="lazyOnload">
              {`
              const conteudoInput = document.querySelector('#inputBusca')

              conteudoInput.addEventListener("input", function() {
                console.log(conteudoInput.value)});

              `}
            </Script>
        </div>
    )
}

export default logoSearch