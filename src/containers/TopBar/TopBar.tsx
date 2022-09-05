import React from 'react'
import { topBar } from '../../utils'

export default function TopBar() {
  return (
    <div>
        <section className="flex divide-x border border-gray-300 shadow-xs bg-white h-10 rounded-xl  xl:w-max overflow-x-auto tiny_scrollbar">
            {topBar.map((item: {name: string}, index: number)=>(
                <button key={index + item.name} className="w-max text-sm px-5 text-gray-700 capitalize font-medium cursor-pointer hover:bg-vencru_bg_dark flex items-center">{item.name}</button>
            ))}
        </section>
    </div>
  )
}
