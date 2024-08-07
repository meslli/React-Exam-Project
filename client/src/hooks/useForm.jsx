import { useState } from "react"


const useForm = () => {
    const [values, setValues] = useState({})

    const updateValues = (e) => {
        setValues(oldValues =>  ({
           ...oldValues,
           [e.target.name]: e.target.value
        }))
    }


    return [ values, updateValues ]
}

export default useForm