import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import React from "react";
import "../css/Viewer.css"

function Viewerpost() {
    //   const viewer = Editor.factory({
    //     el: el,
    //     viewer: true,
    //     height: '500px',
    //     initialValue: review.content,
    //   const viewer = new Viewer({
    //     el: document.querySelector('#viewer'),
    //     height: '600px',
    //     initialValue: review.content,
    //   })
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
                <div className="ViewErrorName">
                    에러명

                    {/*스크랩 이미지*/}
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