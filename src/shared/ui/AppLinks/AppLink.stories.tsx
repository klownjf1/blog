import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {AppLink, AppLinkTheme} from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkPrimary = Template.bind({});
AppLinkPrimary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const AppLinkSecondary = Template.bind({});
AppLinkSecondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const AppLinkPrimaryDark = Template.bind({});
AppLinkPrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AppLinkSecondaryDark = Template.bind({});
AppLinkSecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
