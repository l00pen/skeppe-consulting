module.exports = function (api) {
  api.cache(true);

  const presets = [];
  const plugins = [];

  return {
    presets,
    plugins,
    include: [/src/, /node_modules\/styleguide/],
  };
}