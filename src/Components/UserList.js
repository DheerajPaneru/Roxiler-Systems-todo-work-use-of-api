import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = ({ id, setID }) => {
    const [resources, setResources] = useState([])

    const fetchResource = async () => {
        const response = await axios.get(
            'https://api.randomuser.me/?results=12'
        )
        setResources(response.data.results)
    }

    useEffect(() => {
        fetchResource()
    }, [])

    return (
 <>
 <ul className="card__wrapper">
                {resources.filter(user => Boolean(id) ? user.login.uuid == id : true)
                    .map(item => (
                        <li key={item.name.first}>
                            <div>
                                <h2>{item.name.first} {item.name.last}</h2>
                                {Boolean(id) ?
                                    <button onClick={() => setID(null)}>
                                        Hide
                                    </button>
                                    :
                                    <button onClick={() => setID(item.login.uuid)}>
                                        Details
                                    </button>
                                }
                            </div>
                        </li>
                   ) )}
            </ul>
        </>
    )
}

export default UserList