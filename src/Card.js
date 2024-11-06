import { useState } from "react";
import play from "./images/seta_play.png";
import turn from "./images/seta_virar.png";
import correct from "./images/icone_certo.png";
import half from "./images/icone_quase.png";
import wrong from "./images/icone_erro.png";

export default function Card(props){
        const [icon, setIcon] = useState("play");
        const [hideC, setHideC] = useState("cardBox");
        // const [hideQ, setHideQ] = useState(true);
        // const [hideA, setHideA] = useState(true);

        function  toggleHideC(){
                setHideC("cardBox hidden");
        }

        return(
         <div>
                <div className={hideC}>
                        <h2>Pergunta</h2>
                        <img src={play} onClick={toggleHideC}/>
                </div>
                <div className="questionBox hidden ">
                        <h2>{props.question}</h2>
                        <img src={turn}/>
                </div>
                <div className="answerBox hidden ">
                        <h2>{props.answer}</h2>
                        <div className="results">
                                <p className="red">Não lembrei</p>
                                <p className="orange">Quase não <br/> lembrei</p>
                                <p className="green">Zap!</p>
                        </div>
                </div>
        </div>
        );
}