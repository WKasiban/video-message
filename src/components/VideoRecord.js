import React, { useRef, useState } from "react";
import { useUserMedia } from "./UserMedia"
import { FaVideoSlash, FaVideo } from "react-icons/fa";

const constraintObj = {
    audio: false,
    video: {
        facingMode: "user",
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 } 
    }
}
   
export default function VideoRecord({ onRecord, onClear }) {
    const videoRef = useRef();

    const mediaStream = useUserMedia(constraintObj);
    console.log(mediaStream);


    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream
    }

    function handleCanPlay() {
        videoRef.current.play();
    }

    function handleStopCamera() {
        videoRef.current.pause();
    }

    const [isActive, setActive] = useState(false)
    const ToggleClass = () => {
        setActive(!isActive)
    }

    
    return (
        <>
            <button
                className={isActive ? 'btn default' : 'btn pressed'}
                onClick={() => {handleCanPlay(); ToggleClass();}}>
                <FaVideo></FaVideo>
            </button>
            <button
                className={isActive ? 'btn pressed' : 'btn default'}
                onClick={() => {handleStopCamera(); ToggleClass();}}>
                <FaVideoSlash></FaVideoSlash>
            </button>
            <video controls 
                ref={videoRef}
                onCanPlay={handleCanPlay}
                playsInline
                autoPlay
            ></video>
        </>
    )
}
