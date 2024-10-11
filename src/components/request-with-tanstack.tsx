import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

interface User {
    first_name: string,
    last_name: string,
    avatar: string
}

export function RequestWithTanStack(){

    const [count, setCount] = useState(1)

    async function getUser(count:number){
        const response = await fetch(`https://reqres.in/api/users/${count}?delay=1`)
        const data = await response.json()
        return data.data
    }

    const { data, isLoading } = useQuery({
        queryKey: ['user_data',count],
        queryFn: () => getUser(count)
    })

 

    function prev(){
        setCount(count-1)
    }

    function next(){
        setCount(count+1)
    }

    if(!data || isLoading){
        return(
            <div>
                <p>carregando</p>
            </div>
        )
    }
 
    return(
        <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
                {data?.avatar || data?.first_name || data?.last_name ? (
                    <img src={data?.avatar} alt="" />
                ):(
                    <p>carregando...</p>
                )}
                <h3 className="text-2xl">{data?.first_name} {data?.last_name}</h3>
            </div>

            <div className="flex gap-3">
                <button onClick={()=>prev()} className="bg-violet-500 py-2.5 px-3 rounded-lg">Prev</button>
                <button onClick={()=>next()} className="bg-violet-500 py-2.5 px-3 rounded-lg">Next</button>
            </div>
        </div>
    )
}