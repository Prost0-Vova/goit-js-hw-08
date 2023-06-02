import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player('iframe', {
  title: true,
  autoplay: true,
  loop: false,
  fullscreen: true,
  quality: '1080p',
});

const timeKey = 'videoplayer-current-time';

const getCurrentTime = function (currentTime) {
    
    const seconds = currentTime.seconds;
    localStorage
}


vimeoPlayer.on('timeupdate', throttle(getCurrentTime, 1000));