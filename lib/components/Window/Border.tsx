interface BorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Border({children, ...props}: BorderProps) {
  return <div {...props}>{children}</div>
}
