import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UseContext/UseContext';
import './Read.css'

const Read = () => {
    const [users, setUsers] = useContext(UserContext)
    const { id } = useParams()
    const user = users.filter((user) => user.id == id)
    console.log(user);
    return (
        <div>
            <div className="read">
                <h1>ID: {user[0].id}</h1>
                <h1>Name: {user[0].name}</h1>
                <h1>Position: {user[0].position}</h1>
                <h1>Salary: {user[0].salary} /= </h1>
                <Link to="/">
                    <Button variant="info">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Read;