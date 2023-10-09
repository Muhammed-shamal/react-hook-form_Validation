import { useFormContext } from 'react-hook-form'
import { findInputErrors } from './findInputErrors';
import { getErrors } from './formIsInvalid';
import { motion, AnimatePresence } from 'framer-motion'

export function Input({ handleChange, type, placeholder, name, label, validation, success }) {
    const { register, formState: { errors } } = useFormContext();


    const findErrors = findInputErrors(errors, name);
    const isInvalid = getErrors(findErrors);

    return (
        <div>
            {success && (
                <i className="text-success mt-2 bi bi-check-circle"></i>
            )}
            <i hidden className="bi bi-exclamation-circle text-danger"></i>

            <AnimatePresence mode="wait" initial={false}>
                {isInvalid && (
                    <InputError
                        message={findErrors.error.message}
                        key={findErrors.error.message}
                    />
                )}
            </AnimatePresence>

            <label for={label}>{label}</label>
            <input onKeyDown={handleChange}
                type={type}
                name={name}
                className={success ? 'form-control mb-2 mt-2 border border-success' : 'form-control mb-2 mt-2'}
                style={
                    isInvalid
                        ? {
                            borderColor: "red",
                            boxShadow: "0 0 0 0.2rem rgba(255, 0, 0, 0.25)",
                        }
                        : { borderColor: "", boxShadow: "" }
                }
                placeholder={placeholder}
                {...register(name, validation)} />
        </div >
    )
}


const InputError = ({ message }) => {
    return (
        <div>
            <motion.span className='text-danger' {...framerMotion}>{message}</motion.span>
        </div>
    )
}

const framerMotion = {
    initial: { opacity: 0, y: 10, scale: [1, 2, 2, 1, 1] },
    animate: { opacity: 1, y: 5 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}