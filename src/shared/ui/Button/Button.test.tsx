import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from './Button';

describe('button', () => {
    test('test', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
