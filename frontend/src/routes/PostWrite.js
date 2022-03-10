import Editor from '../components/Editorpost'
import Homecate from '../components/Home/HomeCategory'
import HomeSearch_login from '../components/Home/HomeSearch_login'
import HomeMypage from '../components/Home/HomeMyPage'

function PostWrite() {
  return(
      <div  className="flex-container center full">
        <div className="full-container flex">
          <HomeSearch_login />
          <div className="flex-container space-between post">
            <Homecate />
            <Editor />
            <div className="board-size">
              <HomeMypage />
            </div>
          </div>
        </div>
      </div>

  );

}
export default PostWrite