import React from 'react';
import style from './Botao.module.scss';

interface Props{
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  children?: React.ReactNode
}

function Botao({onClick,type,children}: Props){
  return(
    <button onClick={onClick} type={type} className={style.botao}>
        {children /* Definidndo uma props com o children para podermos acessalo de onde quisermos */} 
      </button>
  )
}



export default Botao;