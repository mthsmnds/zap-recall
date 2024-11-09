import Card from "./Card";

export default function Cards({cards, addCompleted}){
        return(
                <div className="cardsContainer">
                        {cards.map((card, index) =>(
                                <Card 
                                question={card.question} 
                                answer={card.answer} 
                                onComplete={addCompleted} 
                                key={card.index}/>
                        ))};
                </div>
        );

}