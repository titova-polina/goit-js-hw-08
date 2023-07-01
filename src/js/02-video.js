import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new VimeoPlayer(document.querySelector('#vimeo-player'));

const saveCurrentTime = throttle(({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', saveCurrentTime);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}
