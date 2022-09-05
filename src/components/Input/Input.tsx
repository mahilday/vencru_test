import React from 'react'

type Props ={
    type?: string
    styles?: string
    placeholder? : string
    inputStyles?: string
    iconName?: string
    checkBoxStyles?: string
}
export default function Input({type, checkBoxStyles, placeholder, inputStyles,styles, iconName}: Props) {
  return (
    <div>
        <section className={`${type=== "text"? 'flex items-center w-full h-10 border border-gray-300 shadow-xs rounded-lg px-3 ' + styles : ''}`}>
           {type === "text"?  <img src={`/icons/${iconName}.svg`} alt={iconName} /> : ""}
            <input type={type !== "text" ? type : "text"} placeholder={placeholder? placeholder : "Search"} className={`${type !== "text"? "": "focus:outline-none ml-2 w-10/12 "} ${inputStyles? inputStyles:" "}`} />
            {type !== "text"?<span className={checkBoxStyles? checkBoxStyles :''}></span>:''}
        </section>
    </div>
  )
}
