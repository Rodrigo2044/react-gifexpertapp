import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


/*  Los custom hooks, no son más que funciones, Que diferencia hay con un funcional component
 La importacion de react no es necesaria, a menos que ustedes regresen jsx, que no es el caso por los momentos */

export const useFetchGifs = ( category ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    
    /*  Solo se llamara este método cuando se renderize por primera vez y lance los gifs
     y como es una promesa podemos poner un then, y se hace la petición http */
     
    useEffect( () => {

        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
                    
            })

    }, [ category ])
     

    return state; // { data: [], loading: true}
    
}
