export default function Footer({completedCards, totalCards}){
        return(
                <div className="footer">
                        <p>{completedCards}/{totalCards} CONCLUÍDOS</p>
                </div>
        );
}
