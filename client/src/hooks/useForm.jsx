import { useState } from "react"


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    const updateValues = (e) => {
        setValues(oldValues =>  ({
           ...oldValues,
           [e.target.name]: e.target.value
        }))
    }


    return [ values, updateValues ]
}

export default useForm