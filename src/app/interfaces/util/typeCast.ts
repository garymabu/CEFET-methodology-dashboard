export const snakeCaseToCamelCase = <T = unknown>(obj: unknown): T => {
  if (obj instanceof Object) {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
      return {
        ...acc,
        [newKey]: snakeCaseToCamelCase(obj as { [id: string]: T }[typeof key]),
      };
    }, {}) as T;
  }
  return obj as T;
};
