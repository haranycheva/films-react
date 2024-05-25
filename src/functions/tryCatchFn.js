export async function tryCatchFn(fetch, setError) {
  try {
    fetch();
  } catch (error) {
    setError(error);
  }
}
