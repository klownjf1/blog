import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {ThunkExtraArg} from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameProps {
    username: string,
    password: string
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = '',
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(

    'login/fetchByIdStatus',
    async (
        authData,
        {extra, dispatch, rejectWithValue},
    ) => {

        try {

            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue('error')
        }

    },
)
