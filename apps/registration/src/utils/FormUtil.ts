export const setFormObject = <T>(
  prev: T, index: number | undefined, name: string, value: any
) => {
  if (index !== undefined && prev instanceof Array) {
    prev[index] = { ...prev[index as keyof T], [name]: value };
    return prev;
  } else {
    const newObj = { [name]: value };
    return { ...prev, ...newObj };
  }
};
