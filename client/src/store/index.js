import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#4169E1',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './personallogowhite.png',
    fullDecal: './personallogowhite.png'
})

export default state;