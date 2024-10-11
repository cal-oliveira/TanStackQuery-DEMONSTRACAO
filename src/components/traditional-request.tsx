import { useEffect, useState } from "react"

interface User {
    first_name: string,
    last_name: string,
    avatar: string
}

export function TraditionalRequest(){

    const [user, setUser] = useState<User>()
    const [count, setCount] = useState(1)
    const [loading, setLoading] = useState(false)

    function getUser(count:number){
        setLoading(true)
            fetch(`https://reqres.in/api/users/${count}?delay=1`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUser(data.data)
            setLoading(false)
            return data.data
        })
    }

    useEffect(()=> {
        getUser(count)
    },[count])
        
    function prev(){
        setCount(count-1)
    }

    function next(){
        setCount(count+1)
    }

    if(!user || loading){
        return(
            <div>
                <p>carregando...</p>
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
                {user?.avatar || user?.first_name || user?.last_name ? (
                    <img src={user?.avatar} alt="" />
                ):(
                    <p>carregando...</p>
                )}
                <h3 className="text-2xl">{user?.first_name} {user?.last_name}</h3>
            </div>

            <div className="flex gap-3">
                <button onClick={()=>prev()} className="bg-violet-500 py-2.5 px-3 rounded-lg">Prev</button>
                <button onClick={()=>next()} className="bg-violet-500 py-2.5 px-3 rounded-lg">Next</button>
            </div>
        </div>
    )
}