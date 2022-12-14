import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"

const Defensores = () =>{
 return(
 <div>
        <ol>
        <PlayerBlue
        jogadores = "16"
        idade = "27"
        />   
        <PlayerGreen
        jogadores = "17"
        idade = "31"
        />   
        <PlayerBlue
        jogadores = "18"
        idade = "25"
        /> 
        <PlayerGreen 
        jogadores = "19"
        idade = "34"
        />
        <PlayerBlue
        jogadores = "20"
        idade = "19"
        />   
        <PlayerGreen
        jogadores = "21"
        idade = "34"
        />
        <PlayerBlue
        jogadores = "22"
        idade = "25"
        />   
        <PlayerGreen
        jogadores = "23"
        idade = "34"
        /> 
        </ol>
 
    </div>
    )
}

export default Defensores