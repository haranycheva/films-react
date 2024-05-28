export async function tryCatchFn(fetch, setLoading, setError) {
  setError(null)
  setLoading(true)
  try {
    fetch();
  } catch (error) {
    setError(error);
  } finally{
    setLoading(false)
  }
}
