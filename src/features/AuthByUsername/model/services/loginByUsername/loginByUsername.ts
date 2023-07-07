import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User, userActions} from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string,
    password: string
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = '',
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/fetchByIdStatus',
    async (authData, thunkAPI) => {

        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data

        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue('error')
        }

    },
)
