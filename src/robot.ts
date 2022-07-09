import axios, { AxiosInstance } from 'axios'
import * as cheerio from 'cheerio'

const BASE_URL = 'https://m.okjike.com/';

class RssHub {
  http: AxiosInstance;
  feedList = [
    'users/wenhao1996'
  ]

  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
  }

  async getFeed() {
    const res = await this.http.get(this.feedList[0]);
    const $ = cheerio.load(res.data)
    const text = $('.jsx-1823662304 .jsx-3930310120.wrap').first().text()
    return text.slice(0, -37).split(/\d\.\s/g);
  }
}

export default RssHub;