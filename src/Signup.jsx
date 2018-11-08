import React, { Component } from 'react';
import {Button,Grid,TextField,AppBar,Toolbar,Typography} from '@material-ui/core';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            emailid:"",
            password:""
        }
    }

  handleSubmit(){
    if(this.state.name === '' || this.state.emailid === ''||this.state.password === ''){
        alert("please fill up the details");
    }
    else{
        var localuser = {username:this.state.name,email:this.state.emailid,password:this.state.password};
        var localgetuser = JSON.parse(localStorage.getItem('users'));
        if(localgetuser === null){
                                localStorage.setItem("users",JSON.stringify([localuser]));
                                this.props.history.push("/");
        }else{
                var emailvalid = this.state.emailid;
                var usersvalid = localgetuser.find (function(user){
                    return user.email === emailvalid;
                })
                console.log(usersvalid);
                if(usersvalid === undefined){
                    localgetuser.push(localuser);                
                    localStorage.setItem("users",JSON.stringify(localgetuser));
                    this.props.history.push("/");
                }else{
                alert('emailid already exist');
                } 
            }
       }
  }
  handleSubmitlogin(){
    this.props.history.push("/");
  }
  onChange(e, type){
      if(type==="name"){
          this.setState({name:e.target.value})
      } else if(type === "email"){
        this.setState({emailid:e.target.value})
      }
      else if(type === "password"){
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
                    
                        <p>Name:</p><TextField type="text" value={this.state.name} onChange={(e)=>{this.onChange(e,"name")}}/><br/>
                        <p>Emailid:</p><TextField type="text" onChange={(e)=>{this.onChange(e,"email")}} value={this.state.emailid}/><br/>
                        <p>Password:</p><TextField type="password" onChange={(e)=>{this.onChange(e,"password")}} value={this.state.password}/><br/><br/>
                        <Button className="square" variant="contained" onClick={() => this.handleSubmit()}>Signup</Button>&nbsp;&nbsp;
                        <Button className="square" variant="contained" onClick={() => this.handleSubmitlogin()}>Login</Button><br/><br/>
            </Grid>
            </form>
         </div>
      );
   }
}
export default Signup;
