
import {useEffect,useState} from 'react';

const usePurchase = purchaseId =>{
    const [purchase, setPurchase] = useState({});

    useEffect( () =>{
        const url = ` https://rocky-depths-16422.herokuapp.com/tool/${purchaseId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setPurchase(data)});

    }, [purchaseId]);
    return [purchase]
}

export default usePurchase;