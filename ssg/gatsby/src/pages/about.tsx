import React from 'react'

function sum(n1: number, n2: number): number
{
    return n1 + n2;
}

export default function about()
{
  return (
    <div>
      {sum(10, 30)}
      <br />
      Very cool About Page
    </div>
  )
}
