import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/Userinfo.css"

function ProfileImg() {
    const [fileURL, setFileURL] = useState("img/profile_init.jpg");

    const onLoadFile = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileURL(imageUrl)
    }

    return (
        <div className="profile">
                <div>
                    <img className="image_area" src={fileURL}/>
                </div>
            <label for="image">프로필 사진 업로드</label>
            <input type="file" id="image" accept="img/*" onChange={onLoadFile}/>
        </div>
    )
}
export default ProfileImg