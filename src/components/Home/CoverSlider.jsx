import React from 'react'
import image1 from '../../assets/carel1.png'
import image2 from '../../assets/carel3.png'
import image3 from '../../assets/carel4.png'
import image4 from '../../assets/carel5.png'
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/scss/image-gallery.scss';
import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from "hero-slider";
export const CoverSlider = () => {
    const images = [image1, image2, image3, image4];
  return (
  // <ImageGallery items={images} />
  <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        // marginTop:0,
        backgroundColor: "#000",
        height: "100%",
        width: "100%",
        flex:1,
        flexDirection:'row'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 3000,
        height: "100vh"
      }}
    >

{/* If wanna display any overlay text on top of carousal image use this */}

  {/* <Overlay>
    <div>
      <h1>hello World</h1>
    </div>
  </Overlay> */}

{
  images.map((e,i) =>
  (<li key={i}>
  <Slide 
  background={{
    backgroundImageSrc:e,
    backgroundAnimation: "zoom"
    // backgroundAttachment:'cover',
  }}
  />
  </li>))
}

      <Nav />
   </HeroSlider> 
  )
}

// {images.map((image) => 
//       <div className='image'>
//         <img src={image} alt="" />
//       </div> 
//       )}

  //  <HeroSlider
  //  height={"100vh"}
  //  autoplay
  //  style={{marginTop:50,padding:0}}
  //  controller={{
  //    initialSlide: 1,
  //    slidingDuration: 500,
  //    slidingDelay: 100,
  //    onSliding: (nextSlide) =>
  //      console.debug("onSliding(nextSlide): ", nextSlide),
  //    onBeforeSliding: (previousSlide, nextSlide) =>
  //      console.debug(
  //        "onBeforeSliding(previousSlide, nextSlide): ",
  //        previousSlide,
  //        nextSlide
  //      ),
  //    onAfterSliding: (nextSlide) =>
  //      console.debug("onAfterSliding(nextSlide): ", nextSlide)
  //  }}
  //  >
