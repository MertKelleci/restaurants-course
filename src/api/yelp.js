import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 48y-vbx5oSjEfyerUBC29gX2MbPS-QbAD3R12H2Mb0rBP1k9LHgOEA41jf0dGCiz01_gQaZW0aO5oGPpXUADXdluukdwLZbsu0TgcdooeqHdj5DIqw8_hdcavt-DYXYx",
  },
});
