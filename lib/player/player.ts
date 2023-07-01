import { title } from 'process'
import { createPubSub } from '../pubsub'
import { createAudio } from './audio'
import { State, Track, Playlist } from './types'

const createPlayer = () => {
  const pubsub = createPubSub()
  const audio = createAudio()

  let currentPlayList: Playlist = {
    id: '',
    title: '',
    imageUrl: '',
    songs: [],
  }

  let state: State = {
    ...audio.getState(),
    //tracks : [],
    // added Playlist
    playlist: currentPlayList,
    currentTrackIndex: null,
    currentTrack: null,
  }

  const setState = (value: Partial<State>) => {
    state = { ...state, ...value }

    pubsub.publish('change', state)
  }

  audio.subscribe(setState)

  const changeTrack = () => {
    const track = state.currentTrack

    if (track) {
      audio.setUrl(track.url)
      audio.play()
    }
  }

  const next = () => {
    if (state.currentTrackIndex === null) {
      return
    }

    const lastIndex = state.playlist.songs.length - 1
    let newIndex = state.currentTrackIndex + 1

    if (newIndex > lastIndex) {
      newIndex = 0
    }

    setState({
      currentTrackIndex: newIndex,
      currentTrack: state.playlist.songs[newIndex],
    })

    changeTrack()
  }

  audio.onEnded(next)

  return {
    play: audio.play,
    pause: audio.pause,
    seek: audio.seek,
    volume: audio.volume,
    getCurrentTime: audio.getCurrentTime,
    getElement: audio.getElement,
    onChangeCurrentTime: audio.onChangeCurrentTime,
    setInitialState: audio.setInitialState,

    getState() {
      return state
    },

    setQueue(playlist: Playlist, index: number) {
      //setState({tracks})
      // Added  tracks to Playlist
      setState({ playlist })
      state.currentTrackIndex = index
      state.currentTrack = playlist.songs[index]
      changeTrack()
    },

    playTrack(trackIndex: number) {
      setState({
        currentTrackIndex: trackIndex,
        currentTrack: state.playlist.songs[trackIndex],
      })

      changeTrack()
    },

    next,

    prev() {
      if (state.currentTrackIndex === null) {
        return
      }

      const newIndex = state.currentTrackIndex - 1

      if (newIndex >= 0) {
        setState({
          currentTrack: state.playlist.songs[newIndex],
          currentTrackIndex: newIndex,
        })

        changeTrack()
      }
    },

    subscribe(listener: (newState: State) => void) {
      return pubsub.subscribe('change', listener)
    },
  }
}

const player = createPlayer()

export default player
