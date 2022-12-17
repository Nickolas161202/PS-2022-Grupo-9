import PlayerBlue from "../components/common/PlayerBlue" //importação do componente utilizado como base
import PlayerGreen from "../components/common/PlayerGreen"

const MeioCampo = () =>{ //função que renderiza a lista de meio campos
 return(
    <div>
        <ol>
        <PlayerBlue
        jogador = "10"
        idade = "27"
        inicial = "J"
        />   
        <PlayerGreen
        jogador = "11"
        idade = "31"
        inicial = "J"
        />   
        <PlayerBlue
        jogador = "12"
        idade = "25"
        inicial = "J"
        />   
        <PlayerGreen
        jogador = "13"
        idade = "34"
        inicial = "J"
        />   
        <PlayerBlue
        jogador = "14"
        idade = "19"
        inicial = "J"
        />   
        <PlayerGreen
        jogador = "15"
        idade = "19"
        inicial = "J"
        />   
        </ol>
    </div>
    )
}

export default MeioCampo