import TableDatiPiena from "./Parts/TableDatiPiena"
import PaginaVuota from "../PaginaVuota/PaginaVuota"
import { useState, useEffect } from "react";
import axios from "axios";

export default function TableDati(props) {
  
  const idUtenteLoggato = props.idUtenteLoggato
  const URL =  'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/' + idUtenteLoggato + '/spese'

  const [ spese, setSpese ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      URL
    );
      setSpese(result.data)
    };
      fetchData()
  }, [])

  if(spese.length > 0) {
    return (
      <TableDatiPiena spese={ spese } idUtenteLoggato={props.idUtenteLoggato} />
    )
  }else{
    return(
      <PaginaVuota />
    )
  }

}