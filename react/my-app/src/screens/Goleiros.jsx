import React from "react"
import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"




const Goleiros = () =>{
 return(
    <div>
        <ol>
        <PlayerBlue
        jogador = "24"
        idade = "27"
        inicial = "J"
        />   
        <PlayerGreen
        jogador = "25"
        idade = "31"
        inicial = "J"
        />   
        <PlayerBlue
        jogador = "26"
        idade = "25"
        inicial = "J"
        /> 
        </ol>
    </div>
    )
}




export default Goleiros