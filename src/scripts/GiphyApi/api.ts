import axios from "axios";
import { giphyConfig } from "../../config/giphyConfig";

class GiphyApi {
	
	public search(query: string): void {
		axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyConfig.apiKey}&q=${query}`);
	}
	
}

export const api = new GiphyApi();