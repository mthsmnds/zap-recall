import play from "./images/seta_play.png";
import turn from "./images/seta_virar.png"

export default function Card(){
        return(
         <div>
                <div className="cardBox">
                        <h2>Pergunta</h2>
                        <img src={play}/>
                </div>
                <div className="questionBox">
                        <h2>Qual a cor do cavalo Branco de Napoleão?</h2>
                        <img src={turn}/>
                </div>
                <div className="answerBox">
                        <h2>O cavalo Branco de Napoleão era marrom. Branco era o nome do cavalo.</h2>
                        <div className="results">
                                <p className="red">Não lembrei</p>
                                <p className="orange">Quase não <br/> lembrei</p>
                                <p className="green">Zap!</p>
                        </div>
                </div>
        </div>
        );
}