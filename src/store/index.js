import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#f7a96d',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logp2.png',
    fullDecal: './threejs.png'

});

export default state