import React, { memo, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 2s linear;

    &.image__loaded {
      opacity: 1;
    }
  }

  .image__loading {
    filter: blur(50px);
    transform: scale(1);
  }
`;

const ImageLoading = (props) => {
  // State for showing image
  const [isSmallImageLoaded, loadSmallImage] = useState(false);
  const [isLargeImageLoaded, loadLargeImage] = useState(false);
  //Responsive height
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isNotMobile = useMediaQuery({ minWidth: 992 })
  // Combine classname for showing
  const smallImageClass = clsx(
    "image__loading", "img-fluid",
    isSmallImageLoaded && "image__loaded"
  );
  const largeImageClass = clsx("img-fluid", isLargeImageLoaded && "image__loaded");
  const setStyles = () => {
    let height = 0;
    if(isDesktop){
      height = props.desktop
    } else if(isMobile) {
      height= props.mobile
    }
    else if(isTablet) {
      height= props.tablet
    }
    else if(isNotMobile) {
      height = props.notMobile
    }
    const styles = {height: height}
    return styles;
  };  
  // Define handle
  const handleSmallImageLoad = () => loadSmallImage(true);
  const handleLargeImageLoad = () => loadLargeImage(true);

  return (
    <Wrapper style={setStyles()}>
        <img src={props.smallSrc}  className={smallImageClass} alt="" onLoad={handleSmallImageLoad} />
        <img src={props.largeSrc}  className={largeImageClass} alt="" onLoad={handleLargeImageLoad} />
    </Wrapper>
  );
}

export default memo(ImageLoading)