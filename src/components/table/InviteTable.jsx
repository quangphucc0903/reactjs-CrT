import React, { useEffect, useState } from 'react';
import { HomeAPI } from "@/services/ex"

export const InviteTable = () => {
    const [data, setData] = useState([])

    const getAllData = async () => {
        try {
            const rq = await HomeAPI.getUser();
            if (Array.isArray(rq)) {
                setData(rq);
            } else {
                console.log(rq);
                setData([]);
            }
        } catch (error) {
            console.log(error);
            setData([]);
        }
    }

    useEffect(() => {
        getAllData();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
    const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <>
            <div className="mx-auto p-10 max-w-[1100px] w-full">
                <h1 className='font-semibold text-[24px] mb-4'>Invite Friends</h1>
                <div className="overflow-x-auto rounded-lg border border-secondary">
                    <table className="min-w-full divide-y divide-secondary bg-white shadow-lg rounded-lg">
                        <thead className="bg-white">
                            <tr>
                                
                                <th className="w-[10%] py-3 px-6  text-[12px] font-medium text-gray-600 uppercase "></th>
                                <th className="w-[80%] py-3 px-6  text-[12px] font-medium text-gray-600 uppercase">Wallet Address</th>
                                <th className="w-[10%] py-3 px-6  text-[12px] font-medium text-gray-600 uppercase ">HEART</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-secondary">
                            {paginatedData.length > 0 && paginatedData?.map((e, index) => (
                                <tr key={index} className='text-gray-900'>
                                    <td className="px-6 py-4 text-center">{(currentPage - 1) * pageSize + index + 1}</td>
                                    <td className="px-6 py-4 text-center">{e.address}</td>
                                    <td className="px-6 py-4 text-center text-gray-600">9,153,233</td>
                                </tr>
                            ))}
                        </tbody>

                        <tfoot className="divide-y divide-secondary">
                            <tr>
                                <td colSpan={3} className="px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Page {currentPage} of {totalPages}
                                        </span>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-4 py-2 font-semibold bg-white text-[14px] border border-secondary text-gray-700 rounded-lg disabled:cursor-not-allowed"
                                            >
                                                Previous
                                            </button>

                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage >= totalPages}
                                                className="px-4 py-2 font-semibold bg-white text-[14px] border border-secondary text-gray-700 rounded-lg disabled:cursor-not-allowed"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}