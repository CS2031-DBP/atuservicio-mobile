module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Asegúrate de usar babel-preset-expo
    };
  };    