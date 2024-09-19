import { StoryContext, StoryFn } from '@storybook/react';


export default (Story: StoryFn, context: StoryContext) => {
    let { theme } = context.globals;

    if (theme === 'light') {
        return (
            <div className="color-scheme--light">
                <Story />
            </div>
        );
    } else if (theme === 'dark') {
        return (
            <div className="color-scheme--dark">
                <Story />
            </div>
        );
    } else {
        return (
            <>
                <div className="color-scheme--light">
                    <Story />
                </div>
                <div className="color-scheme--dark">
                    <Story />
                </div>
            </>
        );
    }
};