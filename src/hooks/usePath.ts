const usePath = () => {
  let pathname = window.location.pathname

  if (pathname.includes("&")) {
    console.log("asdad")
    pathname = pathname.substring(1)
    pathname = pathname.replace(pathname, "")
  }

  return pathname
}

export default usePath
