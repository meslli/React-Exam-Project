import { useState } from "react"


const useForm = (initialValues, submitFunction) => {
    const [values, setValues] = useState(initialValues)

    const updateValues = (e) => {
        setValues(oldValues =>  ({
           ...oldValues,
           [e.target.name]: e.target.value
        }))
    }
    
    const submitForm = (e) => {
        e.preventDefault()

        submitFunction(values)
    }

    return { values, updateValues, submitForm }
}

export default useForm