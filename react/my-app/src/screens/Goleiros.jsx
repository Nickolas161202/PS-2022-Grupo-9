import React from "react"
<<<<<<< Updated upstream
import PlayerGreen from "../components/common/PlayerGreen"
const Goleiros = () =>{
 return(
 <div>
        <ol>
            <PlayerBlue
            jogadores = "24"
            idade = "27"
            inicial = "J"
            />   
            <PlayerGreen
            jogadores = "25"
            idade = "31"
            inicial = "J"
            />   
            <PlayerBlue
            jogadores = "26"
            idade = "25"
            inicial = "J"
            /> 
        </ol>
    </div>
    )
}
=======

const Goleiros=[
 {jogadores: "24", idade: "27", inicial: "J"},  
 {jogadores: "25", idade: "31", inicial: "J"},
 {jogadores: "26",idade: "25", inicial: "J"},
    ];
>>>>>>> Stashed changes

const ListaGoleiros=Goleiros.map(
    (g,i)=>
    <li key={i}>{i} {g.joagores}
    <ol> 
        <li>  {g.idade}</li>
    </ol>
      {g.inicial}
     </li>


)


export default ListaGoleiros