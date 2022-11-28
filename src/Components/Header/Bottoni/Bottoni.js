import BottoneAggiungiDati from "./BottoneAggiungiDato"
import BottoneVisualizzaTabella from "./BottoneVisualizzaTabella"

export default function Bottoni() {

    return (
        <div className="containerBottoni">
            <BottoneAggiungiDati />
            <BottoneVisualizzaTabella />           
        </div>
    )

}