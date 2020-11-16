import React from "react";

class SignUp extends React.Component {
  state = {
    userid: "",
    userpass:"",
    userpass2:"",
    username: "",
    date:"",
    sex:"",
    userphone:""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert("id : " + this.state.userid  + 
    "\n이름 : " + this.state.username  +  
    "\n생년월일 : " + this.state.date +  
    "\n성별 : " + this.state.sex + 
    "\n전화번호 : " + this.state.userphone
      );
    this.setState({
        userid: "",
        userpass:"",
        userpass2:"",
        username: "",
        date:"",
        sex:"",
        userphone:""
    });
  };


  render() {
    return (
      <div>
        <h1>회원가입</h1>
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
        <input
          type="text"
          name="userpass2"
          placeholder="비밀번호 재확인"
          value={this.state.userpass2}
          onChange={this.handleChange}
        
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="이름"
          value={this.state.username}
          onChange={this.handleChange}
   
        />
        <br />
        <input type="date" name="date" value={this.state.date}
        onChange={this.handleChange} />
        <br />
        <select name="sex"
        value={this.state.sex}
        onChange={this.handleChange}>
          <option value="여">여</option>
          <option value="남">남</option>
        </select>
        <br />
        <input
          type="text"
          name="userphone"
          placeholder="휴대전화"
          value={this.state.userphone}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick}>가입하기</button>
      </div>
    );
  }
}
export default SignUp;
