import { useEffect, useState } from "react";
type UserType = {
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string
}

function MyUseEffect (){
  const [users,setUsers] = useState<UserType[]>([])

  // useEffect(callback): callback chạy lần đầu khi component render, 
  // callback được gọi lại khi component re-render

  // useEffect(()=>{
  //   const getData = async ()=>{
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //     // console.log(res);
      
  //     const data = await res.json();
  //     console.log(data);
  //     if(data){
  //       setUsers(data) // component -> re-render
  //     }
      
  //   }

  //   getData();
  // })

  // useEffect(callback,[]) : callback chỉ được gọi lần đầu tiên khi component render

  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      // console.log(res);
      
      const data = await res.json();
      console.log(data);
      if(data){
        setUsers(data) // component -> re-render
      }
    }

    getData();
  },[])

  // useEffect(callback,[deps1,deps2])

  return (

    <>
      <h1>UseEffect</h1>

      <ul>
        {
          users.map((item: UserType)=>{
            return (
              <li key={item.id}>{item.id}. {item.name}|{item.phone}</li>
            )

          })
        }
      </ul>
    </>
  )
}

export default MyUseEffect;