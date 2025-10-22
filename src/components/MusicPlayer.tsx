import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import specialAudio from "@/assets/special.mp3";
import hbdAudio from "@/assets/hbd_ursule_1.mp3";
import hbdAudio2 from "@/assets/hbd ursule (2).mp3";

interface Track {
  title: string;
  artist: string;
  url: string;
}

const tracks: Track[] = [
  { title: "Happy Birthday Ursule", artist: "Dédicace Spéciale ❤️", url: hbdAudio },
  { title: "Special pour Ursule", artist: "Un message d'amour et d'espoir 💝", url: specialAudio },
  { title: "Happy Birthday Ursule (2)", artist: "Que nos liens se renforcent chaque jour 🌟", url: hbdAudio2 },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(70);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => handleNext();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setTimeout(() => audioRef.current?.play(), 120);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setTimeout(() => audioRef.current?.play(), 120);
    setIsPlaying(true);
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="gradient-rose rounded-3xl p-8 backdrop-blur-sm border border-primary/20 rose-glow">
          <audio ref={audioRef} src={tracks[currentTrack].url} />

          <div className="text-center mb-8 space-y-2">
            <h3 className="text-3xl font-semibold text-primary animate-pulse-glow">{tracks[currentTrack].title}</h3>
            <p className="text-muted-foreground">{tracks[currentTrack].artist}</p>
          </div>

          <div className="space-y-2 mb-8">
            <Slider value={[currentTime]} max={duration || 100} step={1} onValueChange={handleSeek} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-6">
            <button onClick={handlePrevious} className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all hover:scale-110" title="Précédent" aria-label="Précédent">
              <SkipBack className="w-5 h-5" />
            </button>

            <button onClick={togglePlay} className="p-6 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-all hover:scale-110 rose-glow" title={isPlaying ? "Pause" : "Lire"} aria-label={isPlaying ? "Pause" : "Lire"}>
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>

            <button onClick={handleNext} className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all hover:scale-110" title="Suivant" aria-label="Suivant">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <Slider value={[volume]} max={100} step={1} onValueChange={(value) => setVolume(value[0])} className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
