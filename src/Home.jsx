import React, { Component } from "react";
import { Route,NavLink,HashRouter} from "react-router-dom";
import Main from "./Main";
import Profile from "./Profile";
import Imgtab from "./Imgtab";
import "./App.css";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@material-ui/core";
class Home extends Component {
  state = {
    open: false,
  };
  handleClickOpen (e){
    this.setState({ open: true });
  };

  handleYes (e){
    this.props.history.push("/");
  };
  handleNo(e){
    this.setState({ open: false });
  }
    render() {
      return (
        <HashRouter>
          <div>
          <Button className="logout" variant="contained" color="secondary" onClick={(e)=>{this.handleClickOpen(e)}}>Log Out</Button><br/><br/>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Log Out"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do You Want to Log Out Your Account
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={(e)=>{this.handleYes(e)}} color="primary">
              Yes
            </Button>
            <Button onClick={(e)=>{this.handleNo(e)}} color="primary" autoFocus>
             No
            </Button>
          </DialogActions>
        </Dialog>
            <h1>Simple SPA</h1> 
            <ul className="header">
              <li><NavLink to="/Main">Main</NavLink></li>
              <li><NavLink to="/Profile">Profile</NavLink></li>
              <li><NavLink to="/Imgtab">Imgtab</NavLink></li>
            </ul>
            <div className="contents">
              <Route exact path="/Main" component={Main}/>
              <Route path="/Profile" component={Profile}/>
              <Route path="/Imgtab" component={Imgtab}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Home;
