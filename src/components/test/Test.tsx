"use client"
import React, { useState } from "react"

function Test() {
  const [value, setValue] = useState(1)
  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(value + +1)}>button</button>
    </>
  )
}

export default Test
