import { kepekLISTA } from "./adat.js";
import Jatekter from "./Jatekter.js";

const taroloElem=$(".tartalom"); //megfogom a tartalom div tárolot
const kivElem=$(".kivalasztott"); //megfogom a kiválasztott divet

new Jatekter(kepekLISTA,taroloElem);