import styles from "../components/css/Sobre.module.css"
import estadio from "../components/assets/estadio.png"
import title from  "../components/assets/title.png"

const Sobre = () => {
    return (
        
        <div>
            <img src={title} alt="" />
            <div className={styles.header}>
                <h1 className={styles.textHeader} >Sobre A Seleção</h1>
            </div>

            <div>
                <p className={styles.text}>A Seleção Brasileira de Futebol representa o Brasil nas competições de futebol da CONMEBOL e FIFA. </p>
            </div>

            <div>
                <p className={styles.text}>Formada em 1915 e considerada um dos maiores símbolos do país, é chamada de "Seleção", "Seleção Canarinho", "Verde-Amarela", além de outras alcunhas. É a seleção mais bem-sucedida da
                    história do futebol mundial,sendo a recordista em conquistas em Copas do Mundo.
                </p>
            </div>

            <div>
                <p className={styles.text}>
                    Tem 5 títulos invictos (1958, 1962, 1970, 1994 e 2002) e quatro títulos da Copa das Confederações FIFA (1997, 2005, 2009 e 2013).
                </p>
            </div>
            
            <div>
                <img src={estadio} alt="img" />
            </div>
            <p className={styles.text}>MAIS QUE 5 ESTRELAS, 200 MILHÕES DE CORAÇÕES</p>
            <p className={styles.text}>É taça na raça Brasil</p>
            




        </div>

    )
}

export default Sobre