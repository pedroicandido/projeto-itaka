import Layout from './hoc/layout'
import RegisterCandidate from './pages/candidate/addCandidate'
import Routes from './routes'
import SignIn from './pages/signin'
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {



  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
