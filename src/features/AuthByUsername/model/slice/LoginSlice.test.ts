import {DeepPartial} from '@reduxjs/toolkit';
import {LoginSchema} from 'features/AuthByUsername';
import {loginByUsername} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import {loginActions, loginReducer} from './LoginSlice';

describe('LoginSlice.test', () => {

    test('test set username', () => {
        const state:DeepPartial<LoginSchema> = {username: '123'}
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123'),
            ),
        ).toEqual({username: '123'})
    })

    test('test set password', () => {
        const state:DeepPartial<LoginSchema> = {password: '123'}
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123'),
            ),
        ).toEqual({password: '123'})
    })
})
