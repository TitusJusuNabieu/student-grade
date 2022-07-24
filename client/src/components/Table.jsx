import React from 'react'

function Table({data}) {
  return (
    <>
        
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400 bg-blue-300">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Student Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Physics Grade
                </th>
                <th scope="col" className="py-3 px-6">
                    Maths Grade
                </th>
                <th scope="col" className="py-3 px-6">
                    English Grade
                </th>
               
            </tr>
        </thead>
        <tbody>
            {
                data === null || data.length === 0 ?<tr><td className='text-5xl dark:text-white text-gray-900'>Please insert data to display</td></tr>:

                data.map((student,index)=>{

                return(
                    <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {student.name}
                    </td>
                    <td className="py-4 px-6">
                        {student.physics}
                    </td>
                    <td className="py-4 px-6">
                        {student.maths}
                    </td>
                    <td className="py-4 px-6">
                        {student.english}
                    </td>
                    
                </tr>
                )

                })
            }

           

            
           
            
        </tbody>
    </table>
</div>



    </>
  )
}

export default Table