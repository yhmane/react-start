import React from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active} = user;
    return(
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;<span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    
    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    ) // key를 지정해줘야 수정, 추가, 삭제시 렌더링 속도가 빨라짐. 고유값이 없을때는 map의 index를 넣기도 하나 지양해야 함
                )
            }
        </div>
    );
}

export default UserList;