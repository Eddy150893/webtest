import React,{useState} from 'react'


export const AddSearch = ({setSearch}) => {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
        setSearch(inputValue);
        setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingrese el texto que desea buscar"
        />
    </form>
    )
}
