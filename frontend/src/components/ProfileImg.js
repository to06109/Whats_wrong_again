import React, {useEffect, useState} from "react";
import axios from "axios";



function ProfileImg() {
    let state;
    state = {
        detailImageFile: null,
        detailImageUrl: null,
    }

    function setState(param) {
        state.detailImageFile = param.detailImageFile
        state.detailImageUrl = param.detailImageUrl
    }
    const [files, setFiles] = useState();

    useEffect(() => {
        preview();

        return () => preview();
    })

    const onLoadFile = (e) => {
        const file = e.target.files;
        console.log(file);
        setFiles(file);
    }

    const setImageUrl = ({result}) => {
        setState({detailImageFile: files[0], detailImageUrl: result});
    }

    const preview = () => {
        if (!files) return false;

        // const imgEl = document.querySelector('.img__box');
        const reader = new FileReader();

        console.log(reader);

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
    return (
        <div>
            {state.detailImageFile && (
                <div className="image_area">
                    <img src = {state.detailImageUrl}/>
                </div>
            )}

            <input type="file" id="image" accept="img/*" onChange={onLoadFile}/>
            <button onClick={editProfile}>사진 변경</button>
        </div>
    )
}
export default ProfileImg