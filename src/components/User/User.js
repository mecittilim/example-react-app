import axios from 'axios';
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

function User() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false))
    },[id])

  return (
    <div>
        <h2>User Detail</h2>
        {loading && <div>Loading...</div>}
        {!loading && <code>{JSON.stringify(user)}</code>}

        <br></br>
        <br></br>

        <Link to={`/user/${parseInt(id)+1}`}>Next User</Link>
    </div>
  )
}

export default User