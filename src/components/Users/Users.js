import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import styles from './styles.module.css'


function Users() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/users`)
    .then(res => setUsers(res.data))
    .finally(() => setLoading(false));
  },[])

  return (
    <div className={styles.userList}>
      <h2>Users</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`} className={styles.link}>{user.name}</Link>
            </li>
          ))
        }
      </ul>

     

    </div>
  )
}

export default Users