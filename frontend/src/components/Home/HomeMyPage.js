import '../../css/Search.css'
import {Link, useHistory} from 'react-router-dom'




function HomeMypage() {
    let history = useHistory();

    const onMypageHandler = (event) => {
        history.push("/userinfo");
    }

    return (
        <div>
            <div className="box"></div>
            {/* 메인우측 */}
            <div className="full-container center mypage">
                <div className="mypage-box">
                    <img onClick={onMypageHandler} className="user-img" src="img/user.png" />
                    <h2>Login</h2>
                </div>
                <div className="mypage-box">
                    <div className="full-container center">Notice</div>
                    <hr className="mypage-line" />
                    <h4 className="notice">post</h4>
                    <h4 className="notice">comment</h4>
                    <h4 className="notice">debate</h4>
                </div>
            </div>
        </div>
    )
}

export default HomeMypage