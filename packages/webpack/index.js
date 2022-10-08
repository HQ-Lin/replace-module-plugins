const pluginName = "WebpackPluginReplaceImport";

class WebpackPluginReplaceImport {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap(pluginName, (factory) => {
      factory.hooks.beforeResolve.tap(pluginName, (data) => {
        if (!data) return;
        this.options.rules.forEach((rule) => {
          if (rule.context) {
            if (typeof rule.context === 'function' && !rule.context(data.context)) return;
            if (rule.context instanceof RegExp && !rule.context.test(data.context)) return;
          }

          if (data.request === rule.originModule) {
            data.request = rule.replaceModule;
          }
        })
      })
    });
  }
}

module.exports = WebpackPluginReplaceImport;
