import {
    CombinedState,
    configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import {CounterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {useDispatch} from 'react-redux';
import {$api} from 'shared/api/api';
import {To } from 'react-router-dom';
import {NavigateOptions} from 'react-router';
import {StateSchema, ThunkExtraArg} from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {

    const rootReducer: ReducersMapObject = {
        ...asyncReducers,
        counter: CounterReducer,
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),

    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
