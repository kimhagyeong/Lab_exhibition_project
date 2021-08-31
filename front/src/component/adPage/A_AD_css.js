import styled from "styled-components";

const Section = styled.section`
  
.workspace {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;

  &.active {
    .gallery-content {
      transform: translateY(0);
    }
    .mobile-body {
      transform: scale(1);
      opacity: 1;
      box-shadow: 0 0 2rem 1rem rgba(black, .1);
    }
  }
}

.bg-content {
  position: absolute;
  left: -1rem;
  right: -1rem;
  top: -1rem;
  bottom: -1rem;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/830072/bg-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(1rem);
  transition: all .5s;
}

.gallery-content {
  position: absolute;
  bottom: 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  box-shadow: 0 0 2rem rgba(black, .2);
  z-index: 1;
  background-color: black;
  height: 7.5rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  justify-content: space-between;
  align-items: center;
  transform: translateY(7.5rem);
  transition: all 1s;
  overflow: auto;

  &__img {
    width: 4.5rem;
    height: 4.5rem;
    flex-shrink: 0;
    margin-right: 2rem;
    border: .1rem solid white;
    cursor: pointer;
    transition: all .5s;
    border-radius: .5rem;
    overflow: hidden;

    &.active {
      border-width: .2rem;
      border-color: purple;
    }
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.mobile-body {
  position: relative;
  flex-shrink: 0;
  width: 450px;
  height: 800px;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/830072/bg-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  user-select: none;
  transform: scale(.9);
  opacity: 0;
  box-shadow: none;
  transition: all 1s;
  margin-bottom: 7.5rem;
  margin-right:100px;
  margin-left:100px;
  &:hover {
    box-shadow: none !important;
    transform: scale(.95) !important;
  }
  .layer-1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 5px solid #484848;
    border-radius: 65px;
  }
  .layer-2 {
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    border: 20px solid #000000;
    border-radius: 65px;
  }
  .layer-gradient-1 {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    border: .3rem solid #484848;
    border-radius: 65px;
    filter: blur(1px);
    opacity: .5;
  }
  .layer-gradient-2 {
    $offset: .7rem;
    position: absolute;
    left: $offset;
    right: $offset;
    top: $offset;
    bottom: $offset;
    border: .4rem solid #bcbcbc;
    border-radius: 40px;
    opacity: .5;
    filter: blur(1px);
  }
  .top-bar {
    width: 17.3rem;
    height: 2.8rem;
    background-color: #000000;
    position: absolute;
    top: 11px;
    // left: 9.1rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    &:before {
      content: "";
      position: absolute;
      bottom: 1.25rem;
      left: -0.9rem;
      width: .8rem;
      height: .8rem;
      border: .4rem solid transparent;
      border-top: .4rem solid black;
      border-right: .4rem solid black;
      border-top-right-radius: .6rem;
      transform: rotate(28deg);
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 1.25rem;
      right: -0.9rem;
      width: .8rem;
      height: .8rem;
      border: .4rem solid transparent;
      border-top: .4rem solid black;
      border-left: .4rem solid black;
      border-top-right-radius: .6rem;
      transform: rotate(-28deg);
    }
  }
  .camera {
    position: absolute;
    bottom: 1.1rem;
    right: 4.5rem;
    right: 4.5rem;
    width: 1rem;
    height: 1rem;
    background-color: red;
    border-radius: 50%;
    border: .2rem solid #1e1f22;
    background-image: linear-gradient(right, #091528, #2363a6);
  }
  .speaker {
    position: absolute;
    bottom: 1.3rem;
    right: 6.5rem;
    width: 4rem;
    height: .6rem;
    background-color: #161616;
    border-radius: .2rem;
  }
  .button {
    width: .3rem;
    height: 2.5rem;
    background-color: #484848;
    position: absolute;
    left: -10px;
    border-top-left-radius: .3rem;
    border-bottom-left-radius: .3rem;
    border: .1rem solid rgba(black, .1);
    border-right: none;

    &.silent {
      top: 9.8rem;
    }
    &.volume-up {
      top: 15rem;
      height: 5rem;
    }
    &.volume-down {
      top: 21.6rem;
      height: 5rem;
    }
    &.power {
      top: 16.9rem;
      height: 5rem;
      right: -10px;
      left: auto;
      transform: rotate(180deg);
    }
  }
}

.ipad{
  width: 1200px;
  height: 800px;
  transform : rotate( 90deg );
  background-color:black;
  background-image:none;
  margin-right:0px;

  video { 
    width: 100%;
    border-radius: 65px;
  }
  .camera {
    top:380px;
    left:30px;
  }
  .button {
    &.volume-down {
      top: 35rem;
    }
  }
}

@media (max-width: 600px) {
  .gallery-content {
    width: 100%;
    border-radius: 0;
  }
  .mobile-body {
    transform: scale(.65) !important;

    &:hover {
      transform: scale(.6) !important;
    }
  }
  .gallery-content__img {
    &:last-child {
      margin-right: 2rem !important;
    }
  }
}

@media (max-height: 800px) {
  .mobile-body {
    transform: scale(.77) !important;

    &:hover {
      transform: scale(.68) !important;
    }
  }
}

@media (max-height: 630px) {
  .mobile-body {
    transform: scale(.53) !important;

    &:hover {
      transform: scale(.48) !important;
    }
  }
}

.note{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 5px 10px;
  background: white;
  border-radius: 4px;
  font-size: 12px;
}
`;
export default Section;