import {useEffect, useState} from 'react';
const PA2 = () => {
    const [data,setData]=useState('hello mf');
    useEffect(()=>{
        fetch('/api').then(response=>
            response.json()).then(dati=>{
                console.log(dati);
                setData(dati);
            });
    });
    return ( <div>
        {data}
    </div> );
}
 
export default PA2;