/**
 *
 * @param props Limited to objects only
 * @param splited The keys that you would like to separate from the _props_ object
 * @returns It returns an array with two positions, wich the first one is the splited props object, and the second the rest
 */
function splitProps<T extends Record<string, any>, F extends keyof T>(
  props: T,
  splited: Array<F>,
) {
  const keys = Object.keys(props) as F[];

  console.log(props);

  return [
    splited.reduce((acc, curr) => ({ ...acc, [curr]: props[curr] }), {}),
    keys
      .filter(i => !splited.includes(i))
      .map(key => {
        return { prop: props[key], key };
      })
      .reduce((acc, curr) => ({ ...acc, [curr.key]: curr.prop }), {}),
  ] as [Pick<T, F>, Omit<T, F>];
}

export { splitProps };
