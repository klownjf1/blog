import {CounterSchema} from 'entities/Counter';
import {CounterReducer, counterActions} from './CounterSlice';

describe('CounterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {value: 10}
        expect(CounterReducer(state, counterActions.decrement)).toEqual({value: 9})
    })
    test('increment', () => {
        const state: CounterSchema = {value: 10}
        expect(CounterReducer(state, counterActions.increment)).toEqual({value: 11})
    })
    test('should work with empty state', () => {
        expect(CounterReducer(undefined, counterActions.increment)).toEqual({value: 1})
    })
})
