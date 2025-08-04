import {useState} from 'react';
import './Home.css';
function Home() {
    const [emoji, setEmoji]=useState("😊");
    const [sliderValue, setSliderValue]=useState(30);
    const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
        <h1 className="header">Playing with emojis using <span>useState</span></h1>
        <p>This is a simple React app that demonstrates how to use the useState hook to manage state in a functional component.</p>

<div className="emoji-container" style={{fontSize:`${sliderValue}px`, backgroundColor:bgColor}}>{emoji}</div>

<div className='slider-container'>
    {sliderValue}
    <input
  type="range"
  min="0"
  max="100"
  className="slider"
  onChange={(e) => setSliderValue(Number(e.target.value))}
  value={sliderValue}
/>
</div>

<div className="emoji-picker">
    <div className="emoji"onClick={()=>{setEmoji("😘")}}>😘</div>
    <div className="emoji"onClick={()=>{setEmoji("🤣")}}>🤣</div>
    <div className="emoji"onClick={()=>{setEmoji("❤️")}}>❤️</div>
    <div className="emoji"onClick={()=>{setEmoji("😁")}}>😁</div>
    <div className="emoji"onClick={()=>{setEmoji("🙌")}}>🙌</div>
    <div className="emoji"onClick={()=>{setEmoji("😍")}}>😍</div>
    <div className="emoji"onClick={()=>{setEmoji("😒")}}>😒</div>
    </div>
    

    <div className='color-picker'>
<div className='color' onClick={() => setBgColor("#f79292ff")} style={{ backgroundColor: "#f79292ff" }}></div>
<div className='color' onClick={() => setBgColor("#ea20f1ff")} style={{ backgroundColor: "#ea20f1ff" }}></div>
<div className='color' onClick={() => setBgColor("#ffffff")} style={{ backgroundColor: "#ffffff" }}></div>
<div className='color' onClick={() => setBgColor("#153438ff")} style={{ backgroundColor: "#153438ff" }}></div>
<div className='color' onClick={() => setBgColor("#f6718dff")} style={{ backgroundColor: "#f6718dff" }}></div>
<div className='color' onClick={() => setBgColor("#919e90ff")} style={{ backgroundColor: "#919e90ff" }}></div>
<div className='color' onClick={() => setBgColor("#2e2c2cff")} style={{ backgroundColor: "#2e2c2cff" }}></div>




    </div>
      </div>
    </div>
  );
}

export default Home;
