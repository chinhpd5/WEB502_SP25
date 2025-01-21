import { useEffect, useState } from "react";
type UserType = {
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string
}
const userInit: UserType ={
  id:0,
  name: '',
  phone:'',
  username: '',
  website:''
}

function MyUseEffect (){
  const [users,setUsers] = useState<UserType[]>([])
  const [id,setId] = useState<number>(0)
  const [user,setUser] = useState<UserType>(userInit)

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
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )
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
  // callback chạy lần đầu tiên khi component render
  // callback sẽ được gọi lại khi dep có sự thay đổi
  useEffect(()=>{
    if(id){
      const getUserById =async ()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json();
        console.log(data);
        if(data)
          setUser(data)
      }

      getUserById();
    }

  },[id]) // mỗi lần id thay đổi thì call back sẽ được gọi lại

  return (

    <>
      <h1>UseEffect</h1>

      <ul>
        {
          users.map((item: UserType)=>{
            return (
              <li onClick={()=>{
                // console.log(item.id);
                setId(item.id)
              }} key={item.id}>{item.id}. {item.name}|{item.phone}</li>
            )

          })
        }
      </ul>

      <h1>Thông tin chi tiết User</h1>
      <h3>Họ và tên: {user.name}</h3>
      <h5>SĐT: {user.phone}</h5>
      <h5>Website {user.website}</h5>
    </>
  )
}

export default MyUseEffect;