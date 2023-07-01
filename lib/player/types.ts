export type AudioState = {
  duration: number
  playing: boolean
  volume: number
}

export type Track = {
  id: string
  url: string
  name: string
  artist: string
}

export type State = AudioState & {
  playlist: Playlist
  currentTrack: Track | null
  currentTrackIndex: number | null
}

export type Playlist = {
  id: string
  title: string
  imageUrl: string
  songs: Track[]
}

export type Artist = {
  id: string
  name: string
  imageUrl: string
  songs: Track[]
}
