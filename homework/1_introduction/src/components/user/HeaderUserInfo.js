import React, {useContext} from "react";

import { UserContext } from "../contexts/User";

const styles = {
  avatarUrl: {
    maxHeight: "32px"
  }
};

export default function HeaderUserInfo(props) {
  const user = useContext(UserContext);

  return user.email ? <UserInfo user={user}/> : <GuestInfo/>;
}

function GuestInfo(props) {
  return (
    <div className="row">
      <div className="col-lg-12 text-right">
        You are not logged in.
      </div>
    </div>
  );
}

function UserInfo(props) {
  const user = props.user;

  return (
    <div className="row">
      <div className="col-lg-12 text-right">
        {user.firstName} {user.lastName} ({user.email})
        <img src={user.avatarUrl} className="rounded-circle float-right" style={styles.avatarUrl} alt="User avatar"/>
      </div>
    </div>
  );
}