import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards({cards}) {


    return <main className={styles.cards}>
        {cards.map( card => 
        <Card ciudad ={card.ciudad}
            celcius={card.celcius}
            clima={card.clima}>
        </Card>)}
    </main>

}

export default Cards