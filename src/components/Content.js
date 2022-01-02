import { FaVideoSlash, FaVideo } from "react-icons/fa"
import { GrPlay, GrResume, GrPause, GrStop } from 'react-icons/gr'

const Content = () => {
    return (
        <div>
            <p>Hi, Everyone! This is a video Message project. With this you can record your video and send your good wish message to your love one. </p>
            <h1 className='title'>How it works?</h1>
            <ul className='description'>
                <li>The camera works automatically. If you want to stop, click on icon <FaVideoSlash></FaVideoSlash> or icon <FaVideo></FaVideo> for starting the camera again.</li>
                <li>Click on icon <GrPlay></GrPlay> to start recording.</li>
                <li>Icon <GrPause></GrPause> for pause.</li>
                <li>And click on icon <GrResume></GrResume> for resuming the recording.</li>
                <li>When it is done, click on icon <GrStop></GrStop> to stop recording.</li>
                <li>The video is displayed below automatically.</li>
            </ul>
        </div>
    )
}

export default Content
