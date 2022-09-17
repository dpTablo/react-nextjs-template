import React, { useEffect, useState } from 'react';
import User from '../model/User';
import { NextPage } from 'next';

/**
 * MSW 사용 예제
 * src/mocks 하위에 mock api 를 구현하고 request 보내고 response 를 받을 수 있다.
 *
 * defaultHandler.ts 에 구현된 https://api.dptablo.com/api/user/list 를 요청하고
 * 리스트를 출력하는 예제이다.
 */
const IndexPage: NextPage = () => {
    const [userList, setUserList] = useState<Array<User>>([]);

    useEffect(() => {
        fetch('https://api.dptablo.com/api/user/list')
            .then((response) => {
                if (response.status !== 200) return;
                return response.json();
            })
            .then((data) => {
                setUserList(data);
            });
    }, []);

    return (
        <ul>
            {userList.map((user, index) => (
                <li key={'user' + index}>
                    {user.name}({user.email})
                </li>
            ))}
        </ul>
    );
};

export default IndexPage;
