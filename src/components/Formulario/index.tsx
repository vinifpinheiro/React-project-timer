import React, { useState } from 'react'; //Importanto React
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid' //Biblioteca que identifica os states com id

interface Props{
  
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
  
}


function Formulario ({setTarefas}: Props){
  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")
  function adcionarTarefa (evento: React.FormEvent<HTMLFormElement>){ //Criando a função de state de adcionar tarefas
    evento.preventDefault(); 
    setTarefas(tarefasAntigas => 
      [...tarefasAntigas ,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id:uuidv4() 
        }
      ]
      );
      setTarefa("")
      setTempo("00:00")
    
  }
  return(
    <form className={style.novaTarefa} onSubmit={adcionarTarefa} /* o .bind(this) funciona para passar o "this" do this.state dentro da <form> onde esta o fromulario */> 
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input //Input definidindo os parametros
            type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa} //Pega o valor inserido no input atraves da state
            onChange={evento => setTarefa( evento.target.value)} //Muda os valores em tempo real dentro do input usando o state
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={tempo} //Pega o valor inserido no input atraves da state
            onChange={evento => setTempo(evento.target.value )} //Muda o valor no cronometro em tempo real usando state
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit"  >
          Adcionar
        </Botao>
      </form>
  )
}





export default Formulario;