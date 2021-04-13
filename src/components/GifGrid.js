import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

/*  En este GifGrid yo necesito recibir la categoría y hacer una petición http */

export const GifGrid = ({ category }) => {

    // Vamos a desestructurar este objeto, y vamos a tener aquí la data
    const {data:images, loading} = useFetchGifs( category );

    console.log(loading);


    // Voy a utilizar el operador spread del img
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img } 
                            />
                        ))
                    }
                
            </div>
        
        </>
    )
}
