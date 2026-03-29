import useClickAnimation from "../hooks/useClickAnimation"

const cfg = (typeof window !== 'undefined' && window.gameConfig) ? window.gameConfig : {};

const StartPage = ({ onStartGame, backgroundImage }) => {
  const { buttonScale,setScale, handleClickAnimation }=useClickAnimation(onStartGame)

  const pageStyle = { 
    backgroundImage: `url(${backgroundImage})`,
    width:'1920px',
    height:'1080px',
    loading:'eager'
  };

  return (
    <div className="page-container" style={pageStyle}>
      <h1 className='start-page-title'>{cfg.strings?.startTitle || 'Monopoly'}</h1>
      <button className="image-button start-button-center" 
        onMouseEnter={()=>setScale("start",1.1)}
        onMouseLeave={()=>setScale("start",1)}
        onClick={() => handleClickAnimation("start")} style={{transform:`translate(-50%, -50%) scale(${buttonScale.start})`}}>
        <img src={"./images/object/Basketball_monopoly_start_button.png"} alt="start button"/>
        <span className="start-button-text">Start</span>
      </button>
    </div>
  );
};

export default StartPage;
