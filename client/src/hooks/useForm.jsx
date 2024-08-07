import { useState } from "react"


const useForm = () => {
    const [values, setValues] = useState({})

    const updateValues = (e) => {
        setValues(oldValues =>  ({
           ...oldValues,
           [e.target.name]: e.target.value
        }))
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    return { values, updateValues, submitForm }
}

export default useForm