import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Text, TextTheme} from 'shared/ui/Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title lorem',
    text: 'text lorem',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'title lorem',
    text: 'text lorem',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text lorem',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'text lorem',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'title lorem',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'title lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({});
Error.args = {
    title: 'title lorem',
    text: 'text lorem',
    theme: TextTheme.ERROR,
};
