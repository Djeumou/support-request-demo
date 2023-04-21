import React from 'react';
//import {DefaultPlayer as Video, P} from 'react-html5video';
//import 'react-html5video/dist/styles.css'; 
import  ReactPlayer from 'react-player';
//import introVideo from './Le Workflow - Gestion des processus métiers.mp4';


export default function ReactVideoPlayer () {
    return (
        <div class='video-size'>
            {/* <div className="video-item">
            <h1> Présentation des départements </h1>
                {/* <Video autoPlay loop >
                <source src={introVideo} type="video/webm" />
                </Video>
                <ReactPlayer url="https://www.youtube.com/watch?v=uMQnn8xU7qs"/>
            </div> */}
            <div className="video-item">
                <h1> Présentation du fonctionnement de l'application </h1> 

                {/* <Video autoPlay loop >
                    <source src={introVideo} type="video/webm" />
                </Video> */}
                <ReactPlayer url="https://www.youtube.com/watch?v=uMQnn8xU7qs"/>
            </div>
            {/* <div className="video-item">
                <h1> IUT DE DOUALA: vu du ciel </h1> 

                {/* <Video autoPlay loop >
                <source src={introVideo} type="video/webm" />
                </Video>
                <ReactPlayer url="https://www.youtube.com/watch?v=pjZCQ5una7s"/>
            </div> */}

        </div>
        
    );
};

// export default ReactVideoPlayer;