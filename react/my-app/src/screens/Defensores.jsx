import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"
import React from "react"

const Defensores = () =>{
 return(
    <div>
        <ol>
            <PlayerBlue
            jogador = "16"
            idade = "27"
            inicial = "J"
            />   
            <PlayerGreen
            jogador = "17"
            idade = "31"
            inicial = "J"
            />   
            <PlayerBlue
            jogador = "18"
            idade = "25"
            inicial = "J"
            /> 
            <PlayerGreen 
            jogador = "19"
            idade = "34"
            inicial = "J"
            />
            <PlayerBlue
            jogador = "20"
            idade = "19"
            inicial = "J"
            />   
            <PlayerGreen
            jogador = "21"
            idade = "34"
            inicial = "J"
            />
            <PlayerBlue
            jogador = "22"
            idade = "25"
            inicial = "J"
            />   
            <PlayerGreen
            jogador = "23"
            idade = "34"
            inicial = "J"
            /> 
        </ol>
    </div>
    )
}

export default Defensores