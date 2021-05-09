import './styles/styles.css';
import { GifReplacer } from "./scripts/GifReplacer";
import { api } from "./scripts/GiphyApi/api";

const gifReplacer = new GifReplacer();
gifReplacer.watchGifLinks();

//api.search("gordon ramsay");