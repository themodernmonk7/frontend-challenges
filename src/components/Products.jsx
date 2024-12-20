import React from "react"

export const Products = ({ data }) => {
  return (
    <section className="">
      {data.map((product) => {
        return (
          <p key={product.id} className="">
            {product.title}
          </p>
        )
      })}
    </section>
  )
}
