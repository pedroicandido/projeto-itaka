import { makeStyles } from "@material-ui/styles";
import oficina from '../../assets/images/oficina.png'

export default makeStyles(theme => ({
  container: {
    width: '100%',
    height: '200px',
    backgroundImage: `url(${oficina})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 60%',
  },
  avatar: {
    position: 'relative',
    top: '110px',
    left: '20px',
    width: '150px',
    height: '150px'
  },
  card: {
    padding: 0
  }
}));
