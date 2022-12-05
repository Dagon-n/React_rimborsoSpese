import TableDatiPiena from "./Parts/TableDatiPiena"
import PaginaVuota from "../PaginaVuota/PaginaVuota"
import { useState, useEffect } from "react";
import axios from "axios";

export default function TableDati(props) {

  const [ spese, setSpese ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/spese'
    );
      setSpese(result.data)
    };
      fetchData()
  }, [])

  if(spese.length > 0) {
    return (
      <TableDatiPiena spese={ spese } />
    )
  }else{
    return(
      <PaginaVuota />
    )
  }

}