import { useEffect } from 'react'
import useClickAnimation from "../hooks/useClickAnimation"

const cfg = (typeof window !== 'undefined' && window.gameConfig) ? window.gameConfig : {};

const ScoresPage = ({navigateTo, backgroundImage, players, setPlayers,bgmAudio}) => {
    const { buttonScale,setScale, handleClickAnimation }=useClickAnimation((key) => handleAfterClickingButton(key))

    const pageStyle = { 
        backgroundImage: `url(${backgroundImage})`,
        width:'1920px',
        height:'1080px',
        loading:'eager'
    };

    useEffect(()=>{
      if(bgmAudio) bgmAudio.pause()
      const audioPlayer=new Audio(cfg.sounds.gameSuccess || './sounds/gameSuccess.mp3')
      audioPlayer.play().catch((e)=>console.log('Audio Failed',e))
    },[])

    const renderWonPlayer=()=>{
        const wonPlayer=players.find(player=>player.step>=24)

        return (
            wonPlayer&&
            <img className={`won-player-${wonPlayer.id}`} src={`./images/object/Basketball_monopoly_finch_0${wonPlayer.id}.png`} alt="Won Player"/>
        )
    }

    const handleAfterClickingButton=(key)=>{
        const destination=key==="home"?"start":"monopoly"
        navigateTo(destination)
        setPlayers(cfg.players || []);
    }

    return (
        <div className="page-container" style={pageStyle}>
            <span className="congratulation-text">You won!</span>
            {renderWonPlayer()}
            <div className="button-container">
                <button className="image-button" 
                onMouseEnter={() => setScale("home",1.1)}
                onMouseLeave={() => setScale("home",1)}
                style={{transform: `scale(${buttonScale.home})`}}
                onClick={()=>handleClickAnimation("home")}>
                    <img src={"./images/object/Basketball_monopoly_home_button.png"} alt="Back to Home"/>
                </button>
                <button className="image-button" 
                onMouseEnter={() => setScale("again",1.1)}
                onMouseLeave={() => setScale("again",1)}
                style={{transform: `scale(${buttonScale.again})`}}
                onClick={()=>handleClickAnimation("again")}>
                    <img src={"./images/object/Basketball_monopoly_again_button.png"} alt="Reset Scores"/>
                </button>
            </div>
        </div>
    )
}

export default ScoresPage;