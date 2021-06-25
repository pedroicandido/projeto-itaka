import { Paper } from "@material-ui/core";
import classNames from "classnames";
import useStyles from './styles'


const Card = props => {
  const classes = useStyles()
  return (
    <Paper className={classNames(classes.paper, props.className ?? '')}>{props.children}</Paper>
  )
}

export default Card