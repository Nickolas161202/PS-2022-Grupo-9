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
            <div style={styles.header}>
          <p style={styles.textHeader}>Jogadores</p>
            </div>

            <button onClick={() => setState("a")}>Atacantes</button>
            <button onClick={() => { setState("g") }}>Goleiros</button>
            <button onClick={() => setState("m")}>Meio De Campo</button>
            <button onClick={() => { setState("d") }}>Defensores</button>

            {(state == "a") ? <div><Atacantes /> </div> : ''}
            {(state == "g") ? <div><Goleiros /> </div> : ''}
            {(state == "m") ? <div> <MeioCampo /> </div> : ''}
            {(state == "d") ? <div> <Defensores /></div> : ''}
        </div>

    )
}

export default Playerlist