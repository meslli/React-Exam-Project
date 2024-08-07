import useForm from "../../hooks/useForm"

const Input = ({ name, type, id }) => {
    const [values, updateValues] = useForm();

    return (
        <>
            <input 
                type={type} 
                id={id} 
                name={name}
                value={values[name] || ''}
                onChange={updateValues} 
            />
        </>
    )
}

export default Input