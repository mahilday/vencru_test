import React from 'react'

type Props = {
    children: React.ReactNode,
    styles?: string
}
const Label: React.FC<Props> =({children, styles})=> {
  return (
    <label className={styles}>
        {children}
    </label>
  )
}

export default Label;
