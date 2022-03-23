import React, {useEffect, useState} from "react";
import axios from "axios";

function ProfileImg33() {
    const [files, setFiles] = useState();
    let state;
    state = {
        detailImageFile: null,
        detailImageUrl: null,
    }

    function setState(param) {
        state.detailImageFile = param.detailImageFile
        state.detailImageUrl = param.detailImageUrl
    }

    useEffect(() => {
        preview();

        return () => preview();
    })

    const onLoadFile = (e) => {
        const file = e.target.files;
        setFiles(file);
    }

    const setImageUrl = ({result}) => {
        setState({detailImageFile: files[0], detailImageUrl: result});
        // console.log(state.detailImageUrl)
    }

    const preview = () => {
        if (!files) return false;

        // const imgEl = document.querySelector('.img__box');
        const reader = new FileReader();

        // console.log(reader);

        reader.onload = function () {
            setImageUrl({result: reader.result});
        };
        // reader.onload = () =>
        //     (imgEl.style.backgroundImage = `url(${reader.result})`);

        reader.readAsDataURL(files[0]);
    }

    //이미지 서버에 전송(formdata 형태)
    const editProfile = (e) => {
        const formdata = new FormData();
        formdata.append('uploadImage', files[0]);
        // /* key 확인하기 */
        // for (let key of formdata.keys()) {
        //     console.log(key);
        // }
        //
        // /* value 확인하기 */
        // for (let value of formdata.values()) {
        //     console.log(value);
        // }
        //
        // axios({
        //     url: '/userinfo',
        //     method: 'post',
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        //     data: formdata,
        //
        //     baseURL: 'http://localhost:3000',
        // })


    }
    let profile_preview = null
    if (state.detailImageFile !== ''){
        profile_preview = <img className="profile_preview" src={state.detailImageUrl}></img>

    }
    return (
        <div className="profile">
            {state.detailImageFile && (
                <div className="image_area">
                    {profile_preview}
                </div>
            )}

            <input type="file" id="image" accept="img/*" onChange={onLoadFile}/>
            <button onClick={editProfile}>사진 변경</button>
        </div>
    )
}
export default ProfileImg33