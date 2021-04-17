import React from 'react';

const UserInfoEditable = (userProfile, onClose) => {
    const { user, team } = userProfile;
    const [userFirstName, setUserFirstName] = React.useState(user.name.first);
    const [userLastName, setUserLastName] = React.useState(user.name.last);
    const [userTitle, setUserTitle] = React.useState(user.name.title);
    const [userEmail, setUserEmail] = React.useState(user.email);
    const [userTeam, setUserTeam] = React.useState(team);

    function formSubmit(e) {
        alert(userFirstName, userLastName, userTitle);
    }

    return < div className="user-profile" >
        <div className="login-time" onClick={onClose}>Close X</div>
        <img className="avatar" src={`${user.picture.thumbnail}`} alt={user.name} />
        <form>
            <div>
                <label>
                    First Name:
                    <input type="text" name="name" value={userFirstName} onChange={(e) => { setUserFirstName(e.target.value) }} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="name" value={userLastName} onChange={(e) => { setUserLastName(e.target.value) }} />
                </label>
                <label>
                    Title:
                    <input type="text" name="name" value={userTitle} onChange={(e) => { setUserTitle(e.target.value) }} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                <input type="text" name="name" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                </label>
            </div>
            <div>
                <label>
                    Team:
                <input type="text" name="name" value={userTeam} onChange={(e) => { setUserTeam(e.target.value) }} />
                </label>
            </div>
            <div>
                <input type="submit" value="Submit" onClick={formSubmit} />
            </div>
        </form>
    </div >


}
export default function UserInfo({ userProfile, isEditable, onClose }) {
    const { user, team } = userProfile;

    if (isEditable) {
        return UserInfoEditable(userProfile, onClose)
    }

    return <div className="user-profile">
        {<div className="login-time">Last Login on <b>{userProfile["last-login"].datetime}</b></div>}
        <img className="avatar" src={`${user.picture.thumbnail}`} alt={user.name} />
        <div className="username">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
        <div className="bio">
            <b>{userProfile["job-title"]}</b> in the <b>{team}</b> team
    </div>
        <div className="description">
            <ul>
                <li>Email : {user.email}</li>
                <li>Contact : {user["contact-ext"]} ${user.contact}</li>
                <li>Join Date : {user["join-date"]}</li>
            </ul>
        </div>
    </div>
}