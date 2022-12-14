import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"

const Atacantes = () =>{
 return(
 <div>
        <ol>
        <PlayerBlue 
        jogador ="1"
        idade ="27"/>  
        <PlayerGreen
        jogador ="2"
        idade ="31"
        />   
        <PlayerBlue
        jogador ="3"
        idade ="25"
        />   
        <PlayerGreen
        jogador ="4"
        idade ="34"
        />   
        <PlayerBlue   
        jogador ="5"
        idade ="19"
        />
        <PlayerGreen
        jogador ="6"
        idade ="34"
        />   
        <PlayerBlue
        jogador ="7"
        idade ="25"
        />   
        <PlayerGreen
        jogador ="8"
        idade ="34"
        />   
        <PlayerBlue
        jogador ="9"
        idade ="25"
        />   
    


        </ol>
 
    </div>
    )
}

export default Atacantes