import { useContext } from "react";
import { ScreenStatusContext } from "../../../Context/ScreenStatusContext";

export default function BottoneAggiungiDati() {

    const { screenState, setScreenState } = useContext(ScreenStatusContext)

    return(
        <button 
        className="btnAggiungiDati"
        onClick={() => setScreenState('formAggiungiDati')}>
            + dati
        </button>
    );

}