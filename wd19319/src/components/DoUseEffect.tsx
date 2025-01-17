import { useEffect, useState } from "react";
type UserType = {
  id: string
  email: string
  phone: string
  username: string
  website: string
}

function DoUseEffect (){
  const [users,setUsers] = useState<UserType[]>([])

  useEffect(()=>{
    // call api
    async function getData(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // console.log(res);
      const data = await res.json();
      console.log(data);
      if(data)
        setUsers(data)
    }
    getData();
  },[])

  return (
    <>
      <h1>useEffect</h1>
      {
        users.map((item:UserType)=>{
          return (
            <div key={item.id} style={{border: '1px solid black'}}>
              <h2>{item.id}</h2>
              <h3>{item.username}</h3>
              <p>{item.phone}</p>
              <p>{item.website}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default DoUseEffect;