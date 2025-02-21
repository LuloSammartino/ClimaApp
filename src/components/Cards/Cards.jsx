import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards({cards, deleteCard}) {


    return <main className={styles.cards}>
        {cards.map( card => 
        <Card ciudad ={card.ciudad}
            celcius={card.celcius}
            clima={card.clima}
            deleteCard={deleteCard}>
        </Card>)}
    </main>

}

export default Cards