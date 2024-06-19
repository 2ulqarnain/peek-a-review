export const kebabToNormal = (str: string) => str.replace(/-/g, " ");
export const normalToKebab = (str: string) =>
  str.toLowerCase().replace(/ /g, "-");

export async function fetchData(endpoint: string) {
  try {
    return await fetch(process.env.NEXT_PUBLIC_SERVER_URL + endpoint).then(
      (res) => res.json(),
    );
  } catch (e) {
    console.error(e);
    return null;
  }
}
