import Viewerpost from '../components/Viewerpost'
import HomeSearch_login from "../components/Home/HomeSearch_login";
import Homecate from "../components/Home/HomeCategory";
import Editor from "../components/Editorpost";
import HomeMypage from "../components/Home/HomeMyPage";
function Viewer() {
  return (

      <div  className="flex-container center full">
          <div className="full-container flex">
              <HomeSearch_login />
              <div className="flex-container space-between post">
                  <Homecate />
                  <Viewerpost />
                  <div className="board-size">
                      <HomeMypage />
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Viewer
