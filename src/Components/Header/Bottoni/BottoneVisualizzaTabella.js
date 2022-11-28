import { useContext } from "react";
import { ScreenStatusContext } from "../../../Context/ScreenStatusContext";

export default function BottoneVisualizzaTabella() {

    const { screenState, setScreenState } = useContext(ScreenStatusContext)

    return (
        <button 
        className="btnVisualizzaTabella"
        onClick={() => setScreenState('tableDati')}>
            tabella
        </button>
    )

}