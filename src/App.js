import Layout from './hoc/layout'
import RegisterCandidate from './pages/candidate/addCandidate'
import Routes from './routes'
import { Route } from 'react-router-dom'
import SignIn from './pages/signin'
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {



  return (
    <>
      <Layout>
        <Routes />

        <CssBaseline />
      </Layout>
    </>
  );
}

export default App;
