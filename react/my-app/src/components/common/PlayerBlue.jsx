import './Player.css';
import tafarellll from './imagens/tafarellll.jpg';

const PlayerBlue = (props) =>{

    return(
        <div>
            <div className='container d-flex faixa_blue'>
                <div className="p-3">
                    <div className='py-3'>
                        <img className='img_jogador border-top border-5 border-primary py-1 mx-auto' src={tafarellll} alt="foto dos jogadores"/>
                    </div>
                </div>
                <div className="p-2 flex-grow-1 text-start justify-content-center">
                    <h6 className='fs-3 fw-bold'>Jogador {props.jogador}</h6>
                    <h6 className='fs-3 fw-bold'>idade: {props.idade}</h6>
                </div>
                <div className="p-2">
                    <div className='circle_blue align-middle'>
                        <h1 className='inicial align-middle fw-bold'>{props.inicial}</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PlayerBlue

