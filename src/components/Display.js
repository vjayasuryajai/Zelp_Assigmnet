import React from 'react'

function Display({posts,value}) {
  
    return (
        <div>
            {

                posts.map(data=> 
                    {
                        return(
                     <div><h1>{data.map(data1 => {
                         console.log(data1)
                         return(
                     data1.code ==value ?   <div>{data1.rate}  {data1.description}</div> : <div></div>)
                     }
                        )} </h1></div> 
                        )

                    }
                )
                    
            }
        </div>
    )
}

export default Display
