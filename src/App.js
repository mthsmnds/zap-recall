import { useState } from "react";
import logo from "./images/logo.png";
import Cards from "./Cards";
import Footer from "./Footer";

export default function App(){
        const cards = [
                { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
                { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
                { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
                { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
                { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
                { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
                { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
                { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
        ];

        const totalCards = cards.length;
        const [completedCards, setCompletedCards] = useState(0);

        const addCompleted =() =>{ setCompletedCards(prevCount => prevCount +1)};

        return(
        <div className="body">
                <div className="topLogo">
                        <img src={logo} alt="logo"/>
                        <h1>ZapRecall</h1>
                </div>
                <Cards 
                cards={cards} 
                addCompleted={addCompleted} />

                <Footer 
                completedCards={completedCards} 
                totalCards={totalCards}/>
        </div>
        );
}