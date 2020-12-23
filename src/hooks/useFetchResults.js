import {useState,useEffect} from 'react';
import { getResults } from '../helpers/getResults';
export const useFetchResults=(search)=>{
    const [state, setstate] = useState({
        data:{},
        loading:true
    })
    useEffect(()=>{
        if(search!==""){
            getResults(search)
            .then(results=>setstate({
                data:results,
                loading:false
            }));
        }else{
            setstate({
                data:{},
                loading:true
            })
        }
    },[search])
    return state;
}