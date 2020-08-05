import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const DEFAULT_HEIGHT = 896.0;
const DEFAULT_WIDTH = 414.0;

export const hp = (height) => heightPercentageToDP(height / DEFAULT_HEIGHT * 100);
export const wp = (width) => widthPercentageToDP(width / DEFAULT_WIDTH * 100);

window.hp = hp;
window.wp = wp;
