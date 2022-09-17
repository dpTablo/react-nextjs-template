import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { setUserValue } from '@store/userSlice';

/**
 * redux 사용 예제
 */
function IndexPage() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.value);

    const updateTabloUser = useCallback(() => {
        dispatch(setUserValue({ userId: 'tablo', password: '1234' }));
    }, []);

    return (
        <div>
            <div>
                <div>userId : {user.userId}</div>
                <div>password : {user.password}</div>
            </div>

            <div>
                <button onClick={updateTabloUser}>유저정보변경 버튼</button>
            </div>
        </div>
    );
}

export default IndexPage;
