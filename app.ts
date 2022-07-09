import RssHub from './src/robot'
import axios from 'axios'


(async () => {
  const rssHub = new RssHub();
  const feed = await rssHub.getFeed();
  const [title, ...contents] = feed;
  axios.post('https://oapi.dingtalk.com/robot/send?access_token=7101e3c78baa31a32ea2fdccef3fafbfcde671f84f846f3750e143ce91279ae0', {
    msgtype: 'markdown',
    markdown: {
      title,
      text: [`## ${title}`, contents.map((item, index) => `${index+1}. ${item}`)].join('\n'),
    },
  })
})()