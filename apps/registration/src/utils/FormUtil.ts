export const setFormObject = <T>(
  prev: T[], index: number, name: string, value: any
) => {
  prev[index] = { ...prev[index], [name]: value };
  return prev.slice();
};
