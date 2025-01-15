import { useEffect ,useState} from "react";

function Users()
{
    const[users,setUsers]=useState([])
    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <>
        <h2>USER LIST</h2>
        <li>TEST</li>
        <ul>
            {users.map((user)=><li>{user.name}</li>)}
            <table border='1'>
                <tr><th> Name</th><th>Email</th><th>Phn no</th></tr>
            </table>
            </ul>
            </>
    )
}
export default Users;