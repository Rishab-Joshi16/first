import React from 'react'

function Lists() {
    let data=[
        {
            name:"john",
            email:"johnsonbaby@gmail.com",
            age:34

        },
        {
            name:"smith",
            email:"smith@gmail.com",
            age:20

        },
        {
            name:"Ian",
            email:"IAn@gmail.com",
            age:35

        }
    ]
  
  return (
    <div>{
        data.map((item,index)=> (
            <div key={index}  > 
            <h1>{item.name} </h1>
               <p>{item.email}</p>
               <p>{item.age}</p>
              

            </div>
        ))
        
        }</div>
  )
}

export default Lists