import { useState } from "react"

const Input = ({ inputId, label, btnText="Submit", inputSubmit }) => {
    const [input, setInput] = useState('')

    const onSubmitButton = (e) => {
        e.preventDefault()
        inputSubmit(input)
    }

    return (
        <form className="mt-4">
            <div className="mb-3">
                <label htmlFor={inputId} className="form-label">{label}</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id={inputId} 
                    aria-describedby={`input-${inputId}`} 
                    value={input}
                    onChange={(e) => {setInput(e.target.value)}}
                />
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <button type="submit"
                className="btn btn-primary"
                onClick={onSubmitButton}
            >
                {btnText}
            </button>
        </form>
    )
}

export default Input