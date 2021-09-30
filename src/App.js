import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imp from './bt.jpg';
import vid from './web.mp4'
function App() {
  return (
    
    <div className="App">
    <div style={{border: "1 solid  black",maxMidth:"100px"}}  >


 <br/>
 <div className="para1">
 <img src={imp} width="450px" />
      <p/>Decorate your desktop with this stunning Winter Hd Wallpapers <br/> Tags Nature Winter Description Nature Winter Snow wallpaper. <br/> Choose one of the available sizes to fit every display size. <br/> Download this free Winter Hd Wallpapers Tags Nature Winter <br/> Description Nature Winter Snow wallpaper in high resolution <br/> and use it to brighten your PC desktop, Ipad, Iphone, Android, <br/> Tablet and every other display. To get the desktop background <br/> (wallpaper) click on the required resolution.<p/>
 </div>
 <br/>
 <div className="para2">
     <p/>Darkness, the direct opposite of lightness,<br/> is defined as a lack of illumination, an absence <br/> of visible light, or a surface that absorbs light, <br/> such as black or brown.

      Human vision is unable <br/> to distinguish colors in conditions of very low luminance. <br/> This is because the hue sensitive photoreceptor cells on the retina <br/> are inactive when light levels are insufficient, in the range of visual  <br/>  perceptionreferred to as scotopic vision.<p/>
   
 <img src="../put.jpg" width="450px"/>
 </div>
</div>
<div class="vid">
<video width={600} height={440} controls >

 <source src={vid} type="video/mp4" />
 </video>
     
   

</div>   
</div>   
  ); 
 }


export default App;
