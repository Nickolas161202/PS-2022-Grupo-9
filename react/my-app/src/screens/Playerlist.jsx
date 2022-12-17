import { useState } from "react"
import Atacantes from "./Atacantes"
import Defensores from "./Defensores"
import Goleiros from "./Goleiros"
import MeioCampo from "./MeioCampo"
import styles from '../components/css/Playerlist.modules.css'

const Playerlist = () => {
    const [state, setState] = useState("a")

    return (
        <div>
            <div className="container">
                <h3 className="px-5 py-1">JOGADORES</h3>
            </div>
            <div className="container menu">
                <div className="row align-items-start">
                    <button className="col px-5 py-1" onClick={() => setState("a")}>Atacantes</button>
                    <button className="col px-5 py-1" onClick={() => setState("m")}>Meio_Campo</button>
                    <button className="col px-5 py-1" onClick={() => { setState("d") }}>Defensores</button>
                    <button className="col px-5 py-1" onClick={() => { setState("g") }}>Goleiros</button>
                </div>
            </div>
            {(state == "a") ? <div><Atacantes /> </div> : ''}
            {(state == "g") ? <div><Goleiros /> </div> : ''}
            {(state == "m") ? <div> <MeioCampo /> </div> : ''}
            {(state == "d") ? <div> <Defensores /></div> : ''}
        </div>
    )
}

export default Playerlist