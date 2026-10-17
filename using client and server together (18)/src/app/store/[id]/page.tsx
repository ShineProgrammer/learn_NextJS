import { notFound } from 'next/navigation';
import React from 'react'

interface User {
    params: Promise<{id: string}>;
    searchParams: Promise<{}>;
}


 async function Products(props: User) {
    

    
    const {id} = await props.params

    if(parseInt(id)>100){
        return notFound()
    }

    console.log(id)
    
  return (
    <div>Products</div>
  )
}

export default Products