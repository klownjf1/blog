import {classNames} from 'shared/lib/classNames/classNames';

describe('className', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', {hovered: true, disabled: false}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods true', () => {
        const expected = 'someClass class1 class2 hovered disabled'
        expect(classNames('someClass', {hovered: true, disabled: true}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', {hovered: true, disabled: undefined}, ['class1', 'class2'])).toBe(expected)
    })
})
