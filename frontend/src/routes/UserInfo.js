import React, {useEffect, useState} from 'react'
import axios from 'axios' //restAPI
// import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../css/Login.css'
import HomeSearch_login from '../components/Home/HomeSearch_login'
import Homecate from "../components/Home/HomeCategory";
import Editor from "../components/Editorpost";
import HomeMypage from "../components/Home/HomeMyPage";
import HomeSearch_logout from "../components/Home/HomeSearch_logout";
import Userinfo from "../components/Userinfo";
import Viewerpost from "../components/Viewerpost";

function UserInfo() {
    const [showing, setShowing] = useState(false);
    const isLogin = localStorage.getItem('login-token');

    //로그인 인증
    const Login_test = () => {
        if (isLogin != null) {
            setShowing(true);
        }
    };
    useEffect(Login_test, []);
    return (
        <div  className="flex-container center full">
            <div className="full-container flex">
                {showing ? <HomeSearch_logout /> : <HomeSearch_login />}
                <div className="flex-container space-between post">
                    <Homecate />
                    <Userinfo />
                    <div className="board-size">
                        <HomeMypage />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserInfo
