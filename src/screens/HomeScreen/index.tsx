import React from 'react'
import Navbar from '../../components/Navbar'
import MediChanComponent from '../../components/MediChanComponent'
import ImageTextComponent from "../../components/ImageTextComponent";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <Navbar />
      <MediChanComponent />
      <ImageTextComponent
        imageUrl="https://media3.giphy.com/media/unQ3IJU2RG7DO/200w.gif?cid=6c09b9523rnwdtcladpazop4r43zvo3vbof0hmw44nv6jnw6&ep=v1_gifs_search&rid=200w.gif&ct=g"
        text="
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptas dolore nemo nulla quisquam dolorem, praesentium consequuntur dicta, nostrum minus quibusdam sequi molestias quos reprehenderit! Fugit voluptas quibusdam explicabo sit?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, non? Facilis quidem dignissimos molestias est suscipit sapiente ratione reiciendis iste?
  
  "
      />
    </>
  );
};
export default HomeScreen