export default function replaceModulePlugin(options) {
  const { rules } = options;

  return {
    name: 'replace-module-plugin',
    transform(code, id) {
      if (!rules || !Array.isArray(rules)) return code;

      rules.forEach((rule) => {
        if (rule.context) {
          if (typeof rule.context === 'function' && !rule.context(id)) return;
          if (rule.context instanceof RegExp && !rule.context.test(id)) return;
        }

        const reg = new RegExp(`('|")${rule.originModule}('|")`, 'g');
        code = code.replace(reg, `'${rule.replaceModule}'`);
      });

      return code;
    },
  };
}
