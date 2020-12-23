import React,{useState} from 'react'
import { AddSearch } from './components/AddSearch';
import {SearchGrid} from "./components/SearchGrid"; 
export const SearchApp = () => {
    
    const [search,setSearch]=useState("");
    return (
        <div>
            <h2>Search App</h2>
            <hr/>
            <AddSearch setSearch={setSearch}/>
            <ol>
            <SearchGrid key={search} search={search}/>
            </ol>
        </div>
    )
}
