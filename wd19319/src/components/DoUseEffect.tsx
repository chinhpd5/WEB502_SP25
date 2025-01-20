import { useEffect, useState } from "react";
type UserType = {
  id: string
  name: string
  email: string
  phone: string
  username: string
  website: string
}
const initUser: UserType ={
  id: '',
  name: '',
  email:'',
  phone:'',
  username:'',
  website: ''
}

function DoUseEffect (){
  const [users,setUsers] = useState<UserType[]>([])
  const [id,setId] = useState<string>('')
  const [user,setUser] = useState<UserType>(initUser)

  console.log(id);
  
  // useEffect(callback,[])
  // callback chỉ được gọi lần đầu tiên khi component render
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

  // useEffect(callback,[deps])
  // callback luôn được chạy lần đầu tiên khi component render
  // callback sẽ gọi lại khi deps thay đổi

  useEffect(()=>{

    const getUserById =async ()=>{
      if(id){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        // console.log(data);
        if(data){
          setUser(data)
        }
      }
    }
    getUserById();

  },[id]) // mỗi id thay đổi thì callback sẽ được gọi lại

  return (
    <>
      <h1>useEffect</h1>
      <ul>
      {
        users.map((item:UserType)=>{
          return (
           <li onClick={
            ()=>{
              // console.log(item.id);
              setId(item.id)
            }
           } key={item.id}>{item.id}|{item.name}|{item.phone}</li>
          )
        })
      }
      </ul>

      <h3>Thông tin chi tiết</h3>
      <h4>Họ và tên: {user.name}</h4>
      <h5>Username: {user.username}</h5>
      <p>SĐT: {user.phone}</p>
      <p>Website: {user.website}</p>
    </>
  )
}

export default DoUseEffect;