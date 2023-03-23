import 'dayjs/locale/uz-latn'

import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    MantineThemeOverride,
    Paper,
} from '@mantine/core'

import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import React from 'react'

const myTheme: MantineThemeOverride = {
    colorScheme: 'light',
    colors: {
        dark: [
            '#01001A',
            '#1E2B58',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#01001A',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
        ],
        light: [
            '#FFF',
            '#CCCCCC',
            '#EFF2F5',
        ]
    }

};

const mantineSettings = (component: () => React.ReactNode) => () => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    })

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    useHotkeys([['mod+J', () => toggleColorScheme()]])
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider theme={{ ...myTheme, colorScheme }} withGlobalStyles withNormalizeCSS>
                <Paper>{component()}</Paper>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
export default mantineSettings