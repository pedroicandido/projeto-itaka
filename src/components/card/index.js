import { Paper } from "@material-ui/core";
import useStyles from './styles'

const Card = props => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>{props.children}</Paper>
  )
}

export default Card