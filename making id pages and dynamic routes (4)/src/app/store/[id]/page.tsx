import React from 'react'

interface User {
    params: Promise<{id: string}>;
    searchParams: Promise<{}>;
}


 async function Products(props: User) {
    
    const {id} = await props.params

    console.log(id)
    
  return (
    <div>Products</div>
  )
}

export default Products