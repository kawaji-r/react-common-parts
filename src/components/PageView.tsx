type thisType = (props: { className?: string; children: React.ReactNode }) => React.ReactNode
export const PageView: thisType = (props) => {
  const { className, children } = props
  return (
    <div className={className} style={{ width: '100vw', height: '100vh' }}>
      {children}
    </div>
  )
}
