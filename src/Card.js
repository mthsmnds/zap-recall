import { useState } from "react";
import play from "./images/seta_play.png";
import turn from "./images/seta_virar.png";
import correct from "./images/icone_certo.png";
import half from "./images/icone_quase.png";
import wrong from "./images/icone_erro.png";

export default function Card(props){
        const [visible,setVisible] = useState("cardBox");
        const [icon, setIcon] = useState(play);
        const [active, setActive] = useState(true);

        const getAnswer = (answer) => {
                if (answer === "red") {
                        setIcon(wrong);
                }
                else if (answer === "orange"){
                         setIcon(half);
                }
                else if (answer === "green") {
                        setIcon(correct);
                };
                
                setVisible("cardBox");
                setActive(false);
                props.onComplete();
        }

        return(
         <div>
                <div className={` cardBox ${visible === "cardBox" ? "" : "hidden"}`}>
                        <h2>Pergunta</h2>
                        <img src={icon} onClick={ () => active && setVisible("questionBox")} className={active ? "" : "disabled"}/>
                </div>
                <div className={` questionBox ${visible === "questionBox" ? "" : "hidden"}`}>
                        <h2>{props.question}</h2>
                        <img src={turn} onClick={ () => setVisible("answerBox")}/>
                </div>
                <div className={` answerBox ${visible === "answerBox" ? "" : "hidden"}`}>
                        <h2>{props.answer}</h2>
                        <div className="results">
                                <p className="red" onClick={ () => getAnswer("red")}>Não lembrei</p>
                                <p className="orange" onClick={ () => getAnswer("orange")}>Quase não <br/> lembrei</p>
                                <p className="green" onClick={ () => getAnswer("green")}>Zap!</p>
                        </div>
                </div>
        </div>
        );
}