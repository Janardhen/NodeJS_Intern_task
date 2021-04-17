import * as React from "react";
import { A } from 'hookrouter';

export default function Users() {
    const [users, setUsers] = React.useState({ users: [] });

    React.useEffect(() => {
        const fetchUsers = async () => {
            const usersProfile = await fetch("./userdata.json")
                .then((response) => response.json());
            setUsers(usersProfile.profile);
        };
        fetchUsers();
    }, []);

    return <div>
        <h1 style={{ textAlign: "center" }}>Users List</h1>
        {users.length === 0 ? <h1>Loading...</h1> : null}
        {users.length > 0 ? <table>
            <thead>
                <tr>
                    <th data-type="numeric">ID <span className="resize-handle"></span></th>
                    <th data-type="text-short">Name<span className="resize-handle"></span></th>
                    <th data-type="text-short">Email <span className="resize-handle"></span></th>
                </tr>
            </thead>
            <tbody>
                {users.map(userProfile => {
                    return <tr key={userProfile.user.userid}>
                        <td><A href={`/userprofile/${userProfile.user.userid}`}>{userProfile.user.userid}</A></td>
                        <td>{userProfile.user.name.first} {userProfile.user.name.last}</td>
                        <td>{userProfile.user.email}</td>
                    </tr>
                })
                }
            </tbody>
        </table> : null}

    </div>;
}
