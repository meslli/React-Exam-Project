import { useEffect, useState } from "react"

const useForm = (initialValues, submitFunction, updateComponent = false) => {
    const [values, setValues] = useState(initialValues)

    const updateValues = (e) => {
        setValues(oldValues =>  ({
           ...oldValues,
           [e.target.name]: e.target.value
        }))
    }
    
    useEffect(() => {
        if(updateComponent) {
            setValues(initialValues)
        }
    }, [initialValues, updateComponent])

    const submitForm = async (e) => {
        e.preventDefault()

        await submitFunction(values)

        setValues(initialValues)
    }

    return { values, updateValues, submitForm }
}

export default useForm