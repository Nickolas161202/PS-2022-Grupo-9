<<<<<<< HEAD
import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"

=======
import React from "react"
import PlayerGreen from "../components/common/PlayerGreen"
import PlayerBlue from "../components/common/PlayerBlue"
>>>>>>> 17595d8fb678dba45106d2e262f6d8bdd7aaf045
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




export default Goleiros