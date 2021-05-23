import React, {useState} from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import General from './components/GeneralInfo'
import ChatList from './components/ChatList'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Image from 'react-bootstrap/Image'

function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  // состояние отображения заставки (сплэш-скрин)
 const [splash, setSplash] = useState(true)

  const Close = () => {
    setSplash(false);
  };
  const classes = useStyles()
  return (
    <BrowserRouter>
     <div className="chatApp">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className="chatApp__navigation" variant="dense">
              <Typography variant="h6" color="inherit">
              <Link onClick={Close} className='navigarion__link link' to='/generalinfo'>Notes</Link>
              <Link onClick={Close} className='navigarion__link link' to='/chatlist'>ChatList</Link>
              </Typography>
            </Toolbar>
          </AppBar>
          {splash === true ? 
            <Image style={{display:'block'}} src='./images/splash.png' width='100%'></Image> :
            <Image style={{display:'none'}} src='./images/splash.png' width='100%'></Image> 
          }
        </div>
          <Switch >
            <Route exact path='/generalinfo' component={General}></Route>
            <Route exact path='/chatlist' component={ChatList}></Route>
            <Redirect to='/'></Redirect>
          </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
