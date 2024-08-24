import { useEffect, useState } from 'react'

function useCurrencyInfo(cur){
    const [data,setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur}.json`)
        .then((pre) => pre.json())
        .then((pre) => setData(pre[cur]))
    },[cur])
    return data;
}
export default useCurrencyInfo;