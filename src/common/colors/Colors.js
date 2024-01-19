export const colors = {
    ":root[data-theme='light']": {
        "--text-50": "#ebe7fe",
        "--text-100": "#d7cffc",
        "--text-200": "#af9ff9",
        "--text-300": "#876ef7",
        "--text-400": "#603ef4",
        "--text-500": "#380ef1",
        "--text-600": "#2d0bc1",
        "--text-700": "#210891",
        "--text-800": "#160660",
        "--text-900": "#0b0330",
        "--text-950": "#060118",

        "--background-50": "#e9e7fd",
        "--background-100": "#d3cffc",
        "--background-200": "#a7a0f8",
        "--background-300": "#7b70f5",
        "--background-400": "#4f40f2",
        "--background-500": "#2311ee",
        "--background-600": "#1c0dbf",
        "--background-700": "#150a8f",
        "--background-800": "#0e075f",
        "--background-900": "#070330",
        "--background-950": "#040218",

        "--primary-50": "#e9e7fd",
        "--primary-100": "#d3d0fb",
        "--primary-200": "#a7a0f8",
        "--primary-300": "#7c71f4",
        "--primary-400": "#5041f1",
        "--primary-500": "#2412ed",
        "--primary-600": "#1d0ebe",
        "--primary-700": "#160b8e",
        "--primary-800": "#0e075f",
        "--primary-900": "#07042f",
        "--primary-950": "#040218",

        "--secondary-50": "#fde7f9",
        "--secondary-100": "#fccff2",
        "--secondary-200": "#f8a0e5",
        "--secondary-300": "#f570d8",
        "--secondary-400": "#f240cb",
        "--secondary-500": "#ee11be",
        "--secondary-600": "#bf0d98",
        "--secondary-700": "#8f0a72",
        "--secondary-800": "#5f074c",
        "--secondary-900": "#300326",
        "--secondary-950": "#180213",

        "--accent-50": "#fde7f3",
        "--accent-100": "#fccfe6",
        "--accent-200": "#f8a0cd",
        "--accent-300": "#f570b5",
        "--accent-400": "#f2409c",
        "--accent-500": "#ee1183",
        "--accent-600": "#bf0d69",
        "--accent-700": "#8f0a4f",
        "--accent-800": "#5f0734",
        "--accent-900": "#30031a",
        "--accent-950": "#18020d",
    },
    ":root[data-theme='dark']": {
        "--text-50": "#060118",
        "--text-100": "#0b0330",
        "--text-200": "#160660",
        "--text-300": "#210891",
        "--text-400": "#2d0bc1",
        "--text-500": "#380ef1",
        "--text-600": "#603ef4",
        "--text-700": "#876ef7",
        "--text-800": "#af9ff9",
        "--text-900": "#d7cffc",
        "--text-950": "#ebe7fe",

        "--background-50": "#040218",
        "--background-100": "#07042f",
        "--background-200": "#0f085e",
        "--background-300": "#160b8e",
        "--background-400": "#1e0fbd",
        "--background-500": "#2513ec",
        "--background-600": "#5142f0",
        "--background-700": "#7c71f4",
        "--background-800": "#a8a1f7",
        "--background-900": "#d3d0fb",
        "--background-950": "#e9e7fd",

        "--primary-50": "#040218",
        "--primary-100": "#070330",
        "--primary-200": "#0e075f",
        "--primary-300": "#150a8f",
        "--primary-400": "#1c0dbf",
        "--primary-500": "#2311ee",
        "--primary-600": "#4f40f2",
        "--primary-700": "#7b70f5",
        "--primary-800": "#a7a0f8",
        "--primary-900": "#d3cffc",
        "--primary-950": "#e9e7fd",

        "--secondary-50": "#180213",
        "--secondary-100": "#300326",
        "--secondary-200": "#5f074c",
        "--secondary-300": "#8f0a72",
        "--secondary-400": "#bf0d98",
        "--secondary-500": "#ee11be",
        "--secondary-600": "#f240cb",
        "--secondary-700": "#f570d8",
        "--secondary-800": "#f8a0e5",
        "--secondary-900": "#fccff2",
        "--secondary-950": "#fde7f9",

        "--accent-50": "#18020d",
        "--accent-100": "#30031a",
        "--accent-200": "#5f0734",
        "--accent-300": "#8f0a4f",
        "--accent-400": "#bf0d69",
        "--accent-500": "#ee1183",
        "--accent-600": "#f2409c",
        "--accent-700": "#f570b5",
        "--accent-800": "#f8a0cd",
        "--accent-900": "#fccfe6",
        "--accent-950": "#fde7f3",
    },


};

export const getElementsBackgroundColor = (theme) => {
    return theme === 'light'
        ? colors[':root[data-theme=\'light\']']['--background-200']
        : colors[':root[data-theme=\'dark\']']['--background-200'];
};

export const getElementsButtonColor = (theme) => {
    return theme === 'light'
        ? colors[':root[data-theme=\'light\']']['--accent-500']
        : colors[':root[data-theme=\'dark\']']['--accent-500'];
};

export const getElementsTextColor = (theme) => {
    return theme === 'light'
        ? colors[':root[data-theme=\'light\']']['--text-950']
        : colors[':root[data-theme=\'dark\']']['--text-950'];
};