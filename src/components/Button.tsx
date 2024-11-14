type thisType = {
  value: string
}
const Button = (props: thisType): any => {
  const { value } = props
  return <button>{value}</button>
}

export { Button }
