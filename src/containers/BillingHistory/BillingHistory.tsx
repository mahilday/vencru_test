import React from 'react'
import Table from '../../components/Table/Table'

export default function BillingHistory() {
    const tableHeader = [{name: "invoice", icon: "arrow-down"}, {name:"Amount", icon: false}, {name:"Date", icon: false}, {name:"Status", icon: false},{name:"Users on plan", icon: false}, {name:"", icon: false}]
  return (
    <div>
        <div className="flex justify-between my-5">
            <h4 className='text-lg capitalize font-medium'>billing history</h4>
            <button className="flex items-center text-sm border border-gray-300 bg-white px-3 py-2 font-medium text-gray-700 rounded-lg"><img className="w-4 h-4 mr-2" src="/icons/download-cloud.svg" alt="download"/><span>Download all</span></button>
        </div>
        <Table tableHeader = {tableHeader}/>
    </div>
  )
}
