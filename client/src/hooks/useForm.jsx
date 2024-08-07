
const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

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