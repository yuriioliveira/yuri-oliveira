import React from 'react'
import Image from 'next/image'
//import estilo from './logoSearch.module.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import LogoEcomprei from '../../../public/logoEcomprei.png'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  root: {
    padding: '15px',
    background: '#e3e5e8',
  },
  areaGeral: {
    maxWidth: '1150px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  areaBusca: {
    color: '#B40000',
    width: '60%',
  },
  campoBusca: {
    width: '80%',
    marginLeft: '10px',
    height: '40px',
    border: '1px solid #000',
    borderRadius: '12px',
    padding: '10px 0 10px 30px',
  },
  iconSearch: {
    position: 'relative',
    float: 'left',
    left: '39px',
    top: '9px',
  },
  iconCadastro: {
    marginRight: '10px',
  },
  areaCliente: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
    minWidth: '116px',
  },
  iconCarrinho: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  p: {
    margin: '0',
  }
});



function logoSearch() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.areaGeral}>
              <div>
                <Image src={LogoEcomprei} alt="Logotipo ALT" />
              </div>
              <div className={classes.areaBusca}>
                <input type="text"name="busca" placeholder="O que você procura?" className={classes.campoBusca} />
                <SearchIcon className={classes.iconSearch} />
               </div>
              <div className={classes.areaCliente}>
                <div>
                  <PersonOutlineIcon className={classes.iconCadastro}/>
                </div>
                <div>
                  <p className={classes.p}>Olá visitante</p>
                  <p className={classes.p}>Cadastre-se</p>
                </div>
              </div>
              <div className={classes.iconCarrinho}>
                <ShoppingCartIcon />
                <p>0</p>
              </div>
            </div>
        </div>
    )
}

export default logoSearch