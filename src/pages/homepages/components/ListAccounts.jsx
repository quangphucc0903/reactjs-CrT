import { useEffect, useState } from "react"
import { HomeAPI } from "@/servieces/ex"

export const ListAccounts = () => {
    const [data, setData] = useState([])
    const getAllData = async () => {
        try {
            const rq = await HomeAPI.getAllUser();
            setData(rq);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                {data?.map((e, index) => {
                    return (
                        <div className="text-black" key={index}>
                            {e.address.city}
                        </div>
                    );
                })}
            </div>
        </>
    )
}