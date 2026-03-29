import useClickAnimation from '../hooks/useClickAnimation';

const cfg = (typeof window !== 'undefined' && window.gameConfig) ? window.gameConfig : {};

const InstructionsPage = ({ navigateTo, backgroundImage }) => {
  const { buttonScale,setScale, handleClickAnimation }=useClickAnimation(()=>navigateTo('monopoly'))

  const pageStyle = { 
    backgroundImage: `url(${backgroundImage})`,
    width:'1920px',
    height:'1080px',
    loading:'eager'
  };

  return (
    <div className="page-container" style={pageStyle}>
      <span className="sticker-text">How to play</span>
      <div className="instructions-text">
        <p>1. Roll the dice and move your game piece.</p>
        <p>2. Teams may land on spaces with questions, Fate cards, or Chance cards.</p>
        <p>3. The first team to finish the required number of laps wins!</p>
      </div>
      <div className="continue-button loop-animation">
        <button 
        onMouseEnter={() => setScale("continue",1.1)}
        onMouseLeave={() => setScale("continue",1)}
        style={{transform: `scale(${buttonScale.continue})`}}
        className="image-button" 
        onClick={() =>handleClickAnimation("continue")}>
          <img src={cfg.images?.btnNext || 'images/object/Basketball_monopoly_next_button.png'} alt="Continue" />
        </button>
      </div>
    </div>
  );
};

export default InstructionsPage;
