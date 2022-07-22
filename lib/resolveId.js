const { dirname, resolve } = require("path");
const { existsSync } = require("fs");

module.exports = function resolveId(file, url, opts) {
  if (file) {
    const resolved = resolve(dirname(file), url);

    if (existsSync(resolved)) {
      return resolved;
    }
  }

  if (opts.paths && opts.paths.length) {
    let absolutePath;

    for (let path of opts.paths) {
      absolutePath = resolve(path, url);

      if (existsSync(absolutePath)) {
        return absolutePath;
      }
    }
  }

  return resolve(url);
};
