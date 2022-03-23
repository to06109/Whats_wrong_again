import React, { useState } from 'react'
import axios from 'axios' //restAPI
// import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../css/Login.css'
import HomeSearch_login from '../components/Home/HomeSearch_login'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //로그인 토큰 예시
  // const login_token_ex = "abcdefg";

  let history = useHistory()

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    axios({
      url: '/login',
      method: 'post',
      data: {
        email: email,
        password: password,
      },

      baseURL: 'http://localhost:3000',
    }).then(function (response) {
      // console.log(response)
      if (response.data == 'success') {
        console.log(response)
        //로그인토큰 예시
        localStorage.setItem('login-token', email);

        history.push('/')
        alert('로그인 성공!')
      } else {
        alert('로그인 실패!')
      }
      // if (response.data['ACCESS_TOKEN']) {
      //   localStorage.setItem('login-token', response.data['ACCESS_TOKEN']);
      // }
    })
        .catch(error => {
          alert("아이디가 존재하지 않습니다!")
        })
  }

  return (
    <div className="all">
      <div className="full-container flex">
        <HomeSearch_login />
      </div>
      <div className="loginregister">
        <div>
          <form>
            <div>
              <input
                name="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={onEmailHandler}
                className="loginregister__input"
              />
            </div>
            <div>
              <input
                type="text"
                onChange={onPasswordHandler}
                value={password}
                className="loginregister__input"
                placeholder="비밀번호"
              />
            </div>
            <Button className="button" onClick={onSubmit} variant="darked">
              Login
            </Button>
          </form>
          <h4 className="letter kr">아직 회원이 아닌가요?&nbsp;&nbsp;&nbsp;</h4>
          <h4 className="letter eng">
            <Link to={`/register`}> Create an account!</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}
export default Login
