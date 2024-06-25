

export async function tryCatchFn(fetch, setLoading, setError) {
  setLoading()
  setError(null)
  try {
    fetch();
  } catch (error) {
    setError(error);
  } finally{
    setLoading()
  }
}
