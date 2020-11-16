import React from "react";

class Login extends React.Component {
  
    state = {
        userid:"",
        userpass: ""
      };
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };


  handleClick = (e) => {
    alert("id : " + this.state.userid
      );
    this.setState({
      userid: "",
      userpass:""
    });
  };


  render() {
    return (
      <div>
        <h1>로그인</h1>
        <input
          type="text"
          name="userid"
          placeholder="아이디"
          value={this.state.userid}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="userpass"
          placeholder="비밀번호"
          value={this.state.userpass}
          onChange={this.handleChange}
       
        />
        <br />
        <button onClick={this.handleClick}>로그인</button>
        <br />
        <button onClick={this.handleClick}>회원가입</button>
      </div>
    );
  }
}
export default Login;