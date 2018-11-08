import React, { Component } from 'react';
import {Button,Grid,TextField,AppBar,Toolbar,Typography} from '@material-ui/core';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={emailid:"",password:""}
    }

  handleSubmit(){
    if(this.state.emailid === '' || this.state.password === ''){
        alert("please fill up the details");
    }
    else{
        var localgetuser = JSON.parse(localStorage.getItem('users'));
        var emailvalid = this.state.emailid;
        var usersvalid = localgetuser.filter(function (user) {
            return user.email === emailvalid;
        });
                console.log(usersvalid);
                if(usersvalid[0].email === emailvalid){
                    alert("Login successfully");   
                    this.props.history.push("/Home");
                }else{
                alert('please enter the correct details');
                } 
            }
        }

  handleSubmitsignup(){
    this.props.history.push("/Signup");
  }
  onChange(e, type){
      if(type==="emailid"){
          this.setState({emailid:e.target.value})
      } else if(type === "password"){
        this.setState({password:e.target.value})
      }
    }
   render() {
    var Style = {
        margin: '40px',
        border: '5px solid pink'
      };
      return (
         <div className="Loginportion" align="center">
         <form>
            <Grid item xs={2} style={Style}>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                        Login Form
                        </Typography>
                    </Toolbar>
                </AppBar>
                    
                        <p>Emailid:</p><TextField type="text" value={this.state.emailid} onChange={(e)=>{this.onChange(e,"emailid")}}/><br/>
                        <p>Password:</p><TextField type="password" onChange={(e)=>{this.onChange(e,"password")}} value={this.state.password}/><br/><br/>
                        <Button className="square" variant="contained" onClick={() => this.handleSubmit()}>Login</Button>&nbsp;&nbsp;
                        <Button className="square" variant="contained" onClick={() => this.handleSubmitsignup()}>Signup</Button><br/><br/>
            </Grid>
            </form>
         </div>
      );
   }
}
export default Login;
