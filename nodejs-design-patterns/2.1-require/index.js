const loadModule = (filename, module, require) => {
  // 1. 自执行函数
  // 2. readFileSync 同步把 filename 的代码拿过来
  // 3. 内置 module, module.exports, require 方法
  const wrapperCode = `
    (function (module, exports, require) {
      ${fs.readFileSync(filename, 'utf8')}
    })(module, module.exports, require)
  `;
  eval(wrapperCode)
};

const requireCache = {};

const require = (path) => {
  // 1. 解析出完整的 path
  const id = require.resolve(path);

  // 缓存里读到了，直接返回 exports 属性
  if (requireCache[id]) {
    return requireCache.exports;
  }

  // 没读到的话，先初始化
  const moduleSource = {
    id,
    exports: {}
  };

  // 调用 loadModule，执行模块里的代码
  // 模块里重写了 module.exports，require 才能返回东西
  // 模块想到处公共的 api，就改写 module.exports
  // 否则返回空对象
  loadModule(id, moduleSource, require);

  // 返回 exports 的东西
  return module.exports;
};