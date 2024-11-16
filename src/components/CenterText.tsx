type thisType = (props: { className?: string; children: React.ReactNode }) => React.ReactNode
export const CenterText: thisType = (props) => {
  const { className, children } = props
  return (
    <div className={className} style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
      <div>{children}</div>
    </div>
  )
}
