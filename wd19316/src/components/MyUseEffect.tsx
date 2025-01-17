import { useEffect, useState } from "react";

type UserType = {
  id: string,
  name: string,
  phone: string,
  website: string
}

function MyUseEffect(){

  const [users,setUsers] = useState<UserType[]>([])
  
  useEffect(()=>{

    async function getData(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      if(data){
        setUsers(data)
      }
    }

    getData();
  },[])

  return(
    <>
      <h1>useEffect</h1>
      <ul>
        {users.map((item: UserType)=>{
          return (
            <li key={item.id}>{item.id}. {item.name}|{item.phone}</li>
          )
        })}
      </ul>
    </>
  )
}

export default MyUseEffect;