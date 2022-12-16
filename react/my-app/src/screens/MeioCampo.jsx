import PlayerBlue from "../components/common/PlayerBlue" //importação do componente utilizado como base
import PlayerGreen from "../components/common/PlayerGreen"
import React from "react"

const MeioCampo = () =>{ //função que renderiza a lista de meio campos
 return(
 <div>
        <ol>
            <PlayerBlue
            jogadores = "10"
            idade = "27"
            />   
            <PlayerGreen
            jogadores = "11"
            idade = "31"
            />   
            <PlayerBlue
            jogadores = "12"
            idade = "25"
            />   
            <PlayerGreen
            jogadores = "13"
            idade = "34"
            />   
            <PlayerBlue
            jogadores = "14"
            idade = "19"
            />   
            <PlayerGreen
            jogadores = "15"
            idade = "19"
            />   
        </ol>
    </div>
    )
}

export default MeioCampo