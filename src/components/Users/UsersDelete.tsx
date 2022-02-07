export {};
/*
import axios from 'axios';
import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "./../../assets/images/plug-avatar.png"

function UsersDelete(props: UsersPropsType) {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
      debugger
      props.setUsers(response.data.items)
    });
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <div>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto } alt="photo" style={{width: '60px'}}/>
          </div>
          <div>
            {
              u.followed
                ? <button onClick={() => {
                  props.unfollowSuccess(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.followSuccess(u.id)
                }}>Follow</button>
            }
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>

        </div>)
      }
    </div>)
};

// export default UsersDelete; */
