import { useState } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import Supheader from "./Supheader";
import { GrPlay, GrResume, GrPause, GrStop } from 'react-icons/gr'

const RecordView = () => {
    const {
        status,
        startRecording,
        pauseRecording,
        resumeRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: true, type: "video/mp4" });
    console.log(status)
    //console.log(mediaBlobUrl)

    const [isPlay, setPlay] = useState(false)
    const [isPause, setPause] = useState(false)
    const [isResume, setResume] = useState(false)
    const [isStop, setStop] = useState(false)

    const TogglePlay = () => {
        if (!isPause && !isResume && !isStop) {
            setPlay(!isPlay) 
        }
        setPause(false)
        setResume(false)
        setStop(false)
    }
    
    const TogglePause = () => {
        if (!isPlay && !isResume && !isStop) {
            setPause(!isPause)
        }
        setPlay(false)
        setResume(false)
        setStop(false)
    }

    const ToggleResume = () => {
        if (!isPlay && !isPause && !isStop) {
            setResume(!isResume)
        }
        setPlay(false)
        setPause(false)
        setStop(false)
    }

    const ToggleStop = () => {
        if (!isPlay && !isPause && !isResume) {
            setStop(!isStop)
        }
        setPlay(false)
        setPause(false)
        setResume(false)
    }
    
    return (
        <div>
            <button 
                className={isPlay ? 'btn pressed' : 'btn default'}
                onClick={() => {
                    startRecording(); 
                    TogglePlay();
                    }}>
                <GrPlay></GrPlay>
            </button>
            <button 
                className={isPause ? 'btn pressed' : 'btn default'}
                onClick={() => {
                    pauseRecording(); 
                    TogglePause();
                }}>
                <GrPause></GrPause>
            </button>
            <button 
                className={isResume ? 'btn pressed' : 'btn default'}
                onClick={() => {
                    resumeRecording(); 
                    ToggleResume();
                }}>
                <GrResume></GrResume>
            </button>
            <button 
                className={isStop ? 'btn pressed' : 'btn default'}
                onClick={() => {
                    stopRecording(); 
                    ToggleStop();}}>
                <GrStop></GrStop>
            </button>
            <Supheader />
            <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
    )
}

export default RecordView
