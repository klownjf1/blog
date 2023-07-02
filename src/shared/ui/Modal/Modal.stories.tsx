import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Modal} from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut illum inventore iusto neque officia, qui ratione sunt suscipit ut. Eligendi laborum laudantium nemo nesciunt numquam pariatur reiciendis repellat vitae?',

};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Inverted = Template.bind({});
Inverted.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut illum inventore iusto neque officia, qui ratione sunt suscipit ut. Eligendi laborum laudantium nemo nesciunt numquam pariatur reiciendis repellat vitae?',
};
Inverted.decorators = [ThemeDecorator(Theme.DARK)]
