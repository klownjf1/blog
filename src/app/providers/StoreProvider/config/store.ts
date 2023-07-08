import {configureStore, DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {CounterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {useDispatch} from 'react-redux';
import {StateSchema} from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: userReducer,

    }
    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState: initialState,
    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
