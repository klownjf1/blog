import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginIsLoading} from './getLoginIsLoading';

describe('getLoginError.test', () => {
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
})
