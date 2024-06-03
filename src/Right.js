import { useEffect, useState } from "react"

const Video = (props) => {
    return <div className="video-container">
        <img className="thumnail" src={props.data.snippet.thumbnails.high.url}/>
      <p>{props.data.snippet.title}</p>
    </div>
}

const RightContainer = () => {
    const [videoArray, setVideoArray] = useState([])
    async function tube() {
        const tubeApiData = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAr678L_Q1UClqzH2Q_tpTeko1SkkCgSsA')
        const data = await tubeApiData.json()
        setVideoArray(data.items)
        console.log(videoArray)
    }
    useEffect(() => {
        tube()
    },[])
    return <div className="right-container">
        <div className="right-container-content">
            <div className="btn-flex">
                <button className="global-btn btn1">News</button>
                <button className="global-btn btn1">Java Script</button>
                <button className="global-btn btn1">Cricket</button>
                <button className="global-btn btn1">Telugu Movies</button>
                <button className="global-btn btn1">Sports</button>
                <button className="global-btn btn1">Nature</button>
            </div>
            <div className="video-flex">
                {
                    videoArray.map((x) => {
                        return <Video key={x.id} data={x}/>

                    })
                }
            </div>
        </div>
    </div>
}


export default RightContainer