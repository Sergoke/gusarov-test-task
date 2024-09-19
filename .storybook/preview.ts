import type { Preview } from "@storybook/react";
import '../src/index.css';

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                // The label to show for this toolbar item
                title: 'Theme',
                icon: 'circlehollow',
                // Array of plain string values or MenuItem shape (see below)
                items: ['light', 'dark', 'both'],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'both',
    },
};

export default preview;