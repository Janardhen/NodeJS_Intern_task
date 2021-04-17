import React from 'react';
import { Bar, BarChart, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UserInfo from './UserInfo';
import ReactModal from 'react-modal';

function getCharts() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return <>
        <LineChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <AreaChart
            width={1000}
            height={400}
            data={data}
            margin={{
                top: 50,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <BarChart
            width={1000}
            height={400}
            data={data}
            margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    </>
}

export default function UserProfile({ id }) {
    const [userProfile, setUserProfile] = React.useState();
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const fetchUsers = async () => {
            const usersProfile = await fetch("../userdata.json")
                .then((response) => response.json());
            const user = usersProfile.profile.filter(user => user.user.userid === id);
            setUserProfile(user[0]);
        };
        fetchUsers();
    }, []);

    if (!userProfile) {
        return <div>Loading user...</div>
    }

    return <>
        <h1 className="title-pen"> User Profile</h1>
        <UserInfo userProfile={userProfile} />
        <button className="btn first" onClick={() => { setIsOpen(true); }}>Edit User Profile</button>
        <div style={{ padding: "50px 25%" }}>
            {getCharts()}
        </div>
        <ReactModal isOpen={isOpen} onRequestClose={() => { setIsOpen(false) }}>
            <UserInfo userProfile={userProfile} isEditable={true} onClose={() => { setIsOpen(false); }} />
        </ReactModal>
    </>
}