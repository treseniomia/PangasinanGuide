module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@constants": "./constants",
            "@components": "./app/components",
            "@screens": "./app/screens",
            "@assets": "./assets",
            // dagdagan mo pa dito kung gusto mo
          },
        },
      ],
    ],
  };
};
