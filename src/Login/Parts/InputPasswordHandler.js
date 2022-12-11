import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function InputPasswordHandler() {

    const [ visible, setVisible ] = useState(false)

    const Icon = (
        <FontAwesomeIcon
            icon={ visible ? 'eye-slash' : 'eye' }
            onClick={ () => {setVisible(visible => !visible)} }
        />
    )

    const InputType = visible ? 'text' : 'password'

    return [ InputType, Icon ]

}