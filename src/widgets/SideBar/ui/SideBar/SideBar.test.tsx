import {fireEvent, render, screen} from '@testing-library/react';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import {componentRender} from 'shared/lib/tests/componentRender/componentRender';
import {SideBar} from './SideBar';

describe('SideBar', () => {
    test('test', () => {
        componentRender(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })
    test('toggle sidebar', () => {
        componentRender(<SideBar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()
    })
})
