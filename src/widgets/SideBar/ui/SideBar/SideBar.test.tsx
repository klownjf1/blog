import {fireEvent, render, screen} from '@testing-library/react';
import {SideBar} from './SideBar';
import {renderWithTranslation} from '../../../../shared/lib/renderWithTranslation/renderWithTranslation';

describe('SideBar', () => {
    test('test', () => {
        renderWithTranslation(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })
    test('toggle sidebar', () => {
        renderWithTranslation(<SideBar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
        screen.debug()
    })
})
