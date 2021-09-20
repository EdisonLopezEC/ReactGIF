import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategori';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])


    // const handleAdd = () => {
    //     setCategories(['Hunter',...categories]);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                        key={ category } 
                        category={ category } />
                    ))
                }
            </ol>
        </>
    )
}
