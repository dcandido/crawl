({
    baseUrl: "../..",
    paths: {
        "jquery": "empty:",
        "react": "static/scripts/contrib/react-0.10.0",
        "text": "static/scripts/contrib/text",
        "jsx": "static/scripts/contrib/jsx",
        "image": "static/scripts/contrib/image",
        "JSXTransformer": "static/scripts/contrib/JSXTransformer-0.10.0",
        "contrib/simplebar": "static/scripts/contrib/simplebar",
        "client": "empty:",
        "comm": "empty:",
        "ui": "empty:",
    },
    jsx: {
        fileExtension: ".jsx"
    },

    optimize: "uglify2", // uglify can't handle the tileinfo files

    exclude: ["static/scripts/app.js"],

    name: "game_data/static/game",
    out: "game.min.js",

    onBuildWrite: function (moduleName, path, singleContents) {
        return singleContents.replace(/jsx!/g, "");
    }
})
