import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import React, {useEffect, useRef, useState} from "react";
import "../css/Viewer.css"
import {useHistory} from "react-router-dom";
import axios from "axios";

function Viewerpost() {
    /*       스크랩        */
    const [isScrape, setScrape] = useState(true)

    // 렌더링 후 최초 한 번 실행
    useEffect(() => {
        // 사용자 id와 post_id를 보내서 Member의 scrape_post_no에 해당 post_id가 있는지 확인
        // -> 있으면 true 반환, 없으면 false 반환 : isscrape
        // axios로 isScrape 반환 -> 반환값을 setScrape

        // 지우지마!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // const postId = 1
        // const userId = 2
        // axios({
        //     url: '/viewer',
        //     method: 'post',
        //     data: {
        //         userId: userId,
        //         postId: postId,
        //     },
        //     baseURL: 'http://localhost:3000',
        // }).then(function (response) {
        //     if (response.data == 'success') { // 이미 스크랩 한 포스트라면
        //         setScrape(true)
        //     } else {
        //         setScrape(false)
        //     }
        // })

        const result = false
        setScrape(result)

        console.log("데이터 가져오기")
    }, [])
    
    // useEffect를 렌더링 후 한번, 그리고 배열 안 변수의 값이 변할 때마다 실행
    useEffect(() => {
        const scrape_button = document.querySelector(".scrape")
        if (isScrape === true) {
            console.log("스크랩 했습니다~")
            scrape_button.src = "img/star1.png"
            scrape_button.addEventListener("click", ScrapeOnClickTrue)
            scrape_button.addEventListener("mouseenter", ScrapeOnMouseLeave, true)
            scrape_button.addEventListener("mouseleave", ScrapeOnMouseEnter, true)

        } else {
            console.log("스크랩 안했습니다~")
            scrape_button.src = "img/star0.png"
            scrape_button.addEventListener("click", ScrapeOnClickFalse)
            scrape_button.addEventListener("mouseenter", ScrapeOnMouseEnter, true)
            scrape_button.addEventListener("mouseleave", ScrapeOnMouseLeave, true)
        }
        console.log(isScrape)
    }, [isScrape])

    // 지우지마!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const setScrapToServer = () => {
        // 사용자가 버튼을 눌러서 isScrape이 바뀌면 해당 state를 서버에 전달
        // scrapeState: true -> scrape_no 1 증가, scrape_post_no에 postId 추가
        const postId = 1
        const userId = 2
        axios({
            url: '/viewer',
            method: 'post',
            data: {
                userId: userId,
                postId: postId,
                scrapeState: isScrape,
            },
            baseURL: 'http://localhost:3000',
        })
    }

    const ScrapeOnClickTrue = () => { // 이미 스크랩했을 경우
        setScrape(false)
        // setScrapToServer()
    }

    const ScrapeOnClickFalse = () => { // 아직 스크랩 안했을 경우
        setScrape(true)
        // setScrapToServer()
    }

    const ScrapeOnMouseEnter = () => {
        const scrape_button = document.querySelector(".scrape")
        scrape_button.src = "img/star1.png"
    }

    const ScrapeOnMouseLeave = () => {
        const scrape_button = document.querySelector(".scrape")
        scrape_button.src = "img/star0.png"
    }


    /*         에러 포스트 내용         */
    // API로 받을 것: 에러id, 에러명, 태그, 내용
    const ViewPost = () => {
        const view = document.querySelector("#viewer")
        const paragraph = localStorage.getItem("paragraph")
        if(paragraph) {
            view.innerHTML = paragraph
        } else{
            alert("작성한 내용이 없습니다.")
        }
    }

    return (
        <div className="initbox">
            <div className="viewflex">
                <div className="ErrorNameDiv">
                    <div className="ErrorName">에러명</div>
                    <img className="scrape" src="img/star0.png"/>
                </div>
                <button onClick={ViewPost} id="debateBtnId" className="debateBtn">
                    토론제의
                </button>
            </div>
            <div>
                <h1>태그</h1>
                <div></div>
            </div>
            <hr></hr>
            <div>
                <div>
                <h1>개요</h1>
                <div></div>
                </div>
                <div>
                    <h1>목차</h1>
                    <div></div>
                </div>
                <div>
                    <h1>해결법</h1>
                    <div></div>
                </div>
            </div>
            <hr></hr>
            <h1> TOAST UI Viewer 만들기 </h1>
            <div id="viewer"></div>
            <button onClick={ViewPost} className="cancelBtn">
                Cancel
            </button>
        </div>
    )
}

export default Viewerpost