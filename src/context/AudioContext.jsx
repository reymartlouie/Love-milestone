import { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react';

export const PLAYLIST = [
  { src: '/audio/about-you.mp3', title: 'About You' },
  { src: '/audio/somebody-else.mp3', title: 'Somebody Else' },
  { src: '/audio/all-i-need-to-hear.mp3', title: 'All I Need To Hear' },
  { src: '/audio/thick-and-thin.mp3', title: 'Thick And Thin' },
  { src: '/audio/Nobody-else.mp3', title: 'Nobody Else' },
  { src: '/audio/tenerif-sea.mp3', title: 'Tenerif Sea' },
  { src: '/audio/ilysb-stripped.mp3', title: 'ILYSB' },
];

const AudioCtx = createContext(null);

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);

  // Single Audio instance — lives for the full session, survives route changes
  useEffect(() => {
    const audio = new Audio(PLAYLIST[0].src);
    audio.volume = 0.7;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const onPlay    = () => setIsPlaying(true);
    const onPause   = () => setIsPlaying(false);
    const onTime    = () => setCurrentTime(audio.currentTime);
    const onMeta    = () => setDuration(audio.duration);
    const onEnd     = () => setCurrentIndex(i => (i + 1) % PLAYLIST.length);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);

    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  // Swap src when track changes, resume if was playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = !audio.paused;
    audio.src = PLAYLIST[currentIndex].src;
    audio.load();
    if (wasPlaying) audio.play().catch(() => {});
  }, [currentIndex]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  }, []);

  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % PLAYLIST.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? PLAYLIST.length - 1 : i - 1));
  }, []);

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
    setTimeout(() => audioRef.current?.play().catch(() => {}), 50);
  }, []);

  const seekTo = useCallback((time) => {
    if (audioRef.current) audioRef.current.currentTime = time;
  }, []);

  const setVolume = useCallback((v) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
  }, []);

  return (
    <AudioCtx.Provider value={{
      playlist: PLAYLIST,
      currentIndex,
      track: PLAYLIST[currentIndex],
      isPlaying,
      currentTime,
      duration,
      volume,
      play,
      togglePlay,
      next,
      prev,
      goTo,
      seekTo,
      setVolume,
    }}>
      {children}
    </AudioCtx.Provider>
  );
}

export const useAudio = () => useContext(AudioCtx);
