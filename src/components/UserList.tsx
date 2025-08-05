import type React from "react";
import type { IUser } from "../models/IUser";
import { useState } from "react";

interface IState {
    users : IUser[] // IUser --> only single object // IUser --> multiple list of array / multiple time it can be use
}

const UserList : React.FC = () => {

    const [state, setState] = useState<IState>({
        users : [
            {sno : 1, userName : "Aftab", age : 22},
            {sno : 2, userName : "Zeeshan", age : 23},
            {sno : 3, userName : "Ali", age : 67},
        ]
    })
    return (
        <>
            <div className="container">
                <div className="row w-50 mt-4">
                    <h1>Looping / Iteration</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    state.users.map((user) => {
                                        return (
                                            <tr key={user.sno}>
                                                <th scope="row">{user.sno}</th>
                                                <td>{user.userName}</td>
                                                <td>{user.age}</td>
                                            </tr>
                                        )
                                    }) 
                                }
                        </tbody>
                        </table>
                </div>
            </div>
        </>
    )
}

export default UserList