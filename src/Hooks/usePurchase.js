import {useEffect,useState} from 'react';

const usePurchase = purchaseId =>{
    const [purchase, setPurchase] = useState({});

    useEffect( () =>{
        const url = `http://localhost:4000/tool/${purchaseId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setPurchase(data));

    }, [purchaseId]);
    return [purchase]
}

export default usePurchase;