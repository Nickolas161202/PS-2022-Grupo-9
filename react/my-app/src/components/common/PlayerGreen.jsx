import './Player.css';

const PlayerGreen = (props) =>{

    return(
        <div>
            <img src="" alt="foto dos jogadores"/>
            <p>Jogador {props.jogador}</p>
            <p>idade: {props.idade}</p>
            <h1>{props.inicial}</h1>
        </div>
    )
}

export default PlayerGreen