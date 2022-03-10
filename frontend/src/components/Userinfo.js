import EditorPost from "./Editorpost";
import "../css/Userinfo.css"
import React, {useState} from "react";
import ProfileImg from "./ProfileImg";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Userinfo() {
    let history = useHistory()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPhoneHandler = (event) => {
        setPhone(event.currentTarget.value)
    }


    // const onSubmit = (event) => {
    //     console.log(name, email, phone)
    // }

    // 현재 로그인됨 아이디도 보내줘야함
    const onSubmit = (event) => {
        event.preventDefault()
        axios({
            url: '/userinfo',
            method: 'post',
            data: {
                name: name,
                phone: phone,
            },

            baseURL: 'http://localhost:3000',
        }).then(function (response) {
            console.log(response)
            if (response.data == 'success') {
                //수정 성공 시 홈 화면으로 이동
                history.push('/')
                alert('수정 성공!')
            } else {
                alert('수정 실패!')
            }
        })
    }

    return (
<div className="initbox">
    <div className="container-full">
        <h1 className="title">회원정보 수정</h1>
        <p>프로필 사진</p>
        <ProfileImg />

        <div className="container-flex">
            <div className="container-full input-info center">
                <input className="input password" disabled={true} placeholder="비밀번호"/>
                <input className="input" disabled={true} placeholder="비밀번호 확인"/>
            </div>
            <div className="container-full input-info center">
                <input name="name"
                       type="text"
                       placeholder="이름"
                       value={name}
                       onChange={onNameHandler}
                       className="input"/>
                <input name="phone"
                       type="phone"
                       placeholder="전화번호"
                       value={phone}
                       onChange={onPhoneHandler}
                       className="input"/>
            </div>
        </div>
        <div className="container-flex button-pos">
            <button className="button-userinfo">비밀번호 변경</button>
            <button
                    type="submit"
                    onClick={onSubmit}
                    className="button-userinfo">변경하기</button>
        </div>

    </div>

</div>
)
}

export default Userinfo