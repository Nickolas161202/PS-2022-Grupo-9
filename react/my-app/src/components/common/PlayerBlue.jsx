import './Player.css';

const PlayerBlue = (props) =>{

    return(
        <div className='container'>
            <img src="" alt="foto dos jogadores"/>
            <div>
                <p>Jogador {props.jogador}</p>
                <p>idade: {props.idade}</p>
            </div>
            <h1>{props.inicial}</h1>
        </div>
    )

}

export default PlayerBlue

