const usePath = () => {
  const initialPath = window.location.pathname.substring(1)
  const path = window.location.pathname.replace(initialPath, "")
  return path
}

export default usePath
