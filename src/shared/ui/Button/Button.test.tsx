import {render, screen} from '@testing-library/react';
import {Button, ButtonTheme} from './Button';

describe('button', () => {
    test('test', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
