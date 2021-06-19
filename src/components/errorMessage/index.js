import useStyles from './styles'

const ErrorMessage = ({ children }) => {
  const classes = useStyles()
  return (
    <p className={classes.feedback}>{children}</p>
  )
}

export default ErrorMessage