function PrimaryButton({
  children,
  href,
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props
}) {
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a className={`button button-${variant} ${className}`} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={`button button-${variant} ${className}`} type="button" {...props}>
      {content}
    </button>
  )
}

export default PrimaryButton
