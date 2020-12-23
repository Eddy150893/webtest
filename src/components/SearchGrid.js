import React from 'react'
import { SearchGridItem } from './SearchGridItem';
import {useFetchResults} from '../hooks/useFetchResults';
export const SearchGrid = ({search}) => {
    const {data,loading}=useFetchResults(search);
    const {soap,tvmaze,itunes}=data;
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{search}</h3>
        {loading&&<p className="animate__animated animate__flash"></p>}
        <h1>TV Maze</h1>
        <div className="box">
                {!loading&&tvmaze.map(tvshow=>(
                    <SearchGridItem 
                    key={tvshow.id} 
                    {...tvshow}/>
                ))}
        </div>
        <h1>SOAP DEMO</h1>
        <div className="box">
                {!loading&&soap.map(person=>(
                    <SearchGridItem 
                    key={person.id} 
                    {...person}/>
                ))}
        </div>
        <h1>itunes</h1>
        <div className="box">
                {!loading&&itunes.map(multimedia=>(
                    <SearchGridItem 
                    key={multimedia.id} 
                    {...multimedia}/>
                ))}
        </div>
    </>
    )
}