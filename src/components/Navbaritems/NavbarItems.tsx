import React from 'react'
import { sidebarNav } from '../../utils'

export default function NavbarItems({styles}: {styles?: string}) {
  return (
    <div className={styles? styles : ""}>
      <section>
        {sidebarNav?.header.map((item: any, index: number)=>(
          <div key={index} className="flex items-center w-full h-10 hover:bg-vencru_bg_dark  rounded-lg px-3">
            <img src={item.icon} alt={item.name} className="h-5 w-5"/>
            <a href={item.href} className="ml-2 text-sm capitalize text-vencru_gray font-medium">{item.name}</a>
          </div>
        ))}
        </section>
        <section className='mt-3'>
        {sidebarNav?.footer.map((item: any, index:number)=>(
          <div key={index} className="flex items-center w-full h-10 hover:bg-vencru_bg_dark rounded-lg hover:text-black px-3">
            <img src={item.icon} alt={item.name} className="h-5 w-5"/>
            <a href={item.href} className="ml-2 capitalize text-vencru_gray text-sm font-medium">{item.name}</a>
          </div>
        ))}
        </section>
    </div>
  )
}
