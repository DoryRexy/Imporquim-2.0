import React from 'react'
import styles from "./example.module.css"
type Props = {}

export default function CssExample({}: Props) {
  const estilo = `font-bold m-10 p-4 ${styles.backgroundRed}`

  return (
    <div className={estilo} style={{}}>CssExample</div>
  )
}