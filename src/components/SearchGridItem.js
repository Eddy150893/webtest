import React from 'react'

export const SearchGridItem = ({
    id,
    name,
    image="/generico.jpg",
    dir,
    other}) => {
    
    return (
        <a href="">
        <img src={image} alt={name}/>
        </a>
    )
}