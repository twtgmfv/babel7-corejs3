module.exports = function (api) {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env",
            {
                "modules": false,
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ],
    ];
    const plugins= [
        ["@babel/plugin-transform-runtime", {
            "corejs": 3 // 可选 false | 2 | 3
        }]

        // "@babel/plugin-proposal-class-properties",
        // "@babel/plugin-syntax-dynamic-import"
    ];
    return {
        presets,
        plugins,
        sourceType: 'unambiguous'
    }
};
