import { useState } from "react"
import Atacantes from "./Atacantes"
import Goleiros from "./Goleiros"

const Rendering = () =>{
const [state, setState] = useState()


return(
<div>


        <button onClick={ () => setState("a")}>Atacantes</button>
        <button onClick ={() =>{setState("g")}}>goleiros</button>
        { (state == "a")? <div><Atacantes/> </div>:''  }
        { (state == "g")? <div><Goleiros/> </div>:''  }
        </div>

    )
}

export default Rendering