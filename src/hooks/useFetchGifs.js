
import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //hace que el metodo se dispare una sola vez
    //evaluar solo cuando la categoria cambia
    useEffect( () => {
        getGif( category )
                .then( imgs  => {

                        setstate({
                            data: imgs,
                            loading: false
                        });
                    
                });
    },[ category]);

    return state; // {data:[], loading: true}
}