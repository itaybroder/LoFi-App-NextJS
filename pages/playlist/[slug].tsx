import { Playlist as PlaylistType } from '@lib/player/types'
import PlaylistView from '@components/Playlist/PlaylistView'
import { GetStaticPropsContext } from 'next'

type Props = {
  playlist: PlaylistType;
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug

  const data = {
    playlists: [
      {
        id: "1",
        title: "CoRruPted_tEleTubbies.mid",
        imageUrl: "https://imgtr.ee/images/2023/07/01/039f0a0c2945a7d72c97fadede1d771c.jpeg",
        songs: [
          {
            id: "1",
            name: "tipshula.mp3",
            artist: "youngA",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688229940/tipshola_wurqud.mp3"
          },
          {
            id: "2",
            name: "toothbrush_akc7w9",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231174/toothbrush_akc7w9.wav"
          },
          {
            id: "3",
            name: "giant_shoes_mlxh2q",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235032/giant_shoes_mlxh2q.wav"
          },
          {
            id: "4",
            name: "ONE_MORE_dga0we",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231173/ONE_MORE_dga0we.wav"
          },
          {
            id: "5",
            name: "MAPAL_yf2rt1",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231161/MAPAL_yf2rt1.wav"
          },
          {
            id: "6",
            name: "תרוץ_לעצלנות_x6rgl5",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231168/%D7%AA%D7%A8%D7%95%D7%A5_%D7%9C%D7%A2%D7%A6%D7%9C%D7%A0%D7%95%D7%AA_x6rgl5.wav"
          },
          {
            id: "7",
            name: "DIMAA_vcb0qj",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688232249/DIMAA_vcb0qj.wav"
          },
          {
            id: "8",
            name: "BOO_OT_sshfrd",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231167/BOO_OT_sshfrd.wav"
          },
          {
            id: "9",
            name: "distant_qqyvli",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235048/distant_qqyvli.wav"
          },
          {
            id: "10",
            name: "eilam_beat_rxuznm",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235039/eilam_beat_rxuznm.mp3"
          },
          {
            id: "11",
            name: "Sunscreen_j2ak4l",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235037/Sunscreen_j2ak4l.wav"
          },
          {
            id: "12",
            name: "nostalgic_black_mv411d",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235032/nostalgic_black_mv411d.wav"
          },
          
        ],
      },
    ]
  };

  const playlist = data.playlists.find((playlist: any) => playlist.id === slug);

  return {
    props: {
      playlist,
    },
  }
}

export async function getStaticPaths() {
  const data = {
    playlists: [
      {
        id: "1",
        title: "CoRruPted_tEleTubbies.mid",
        imageUrl: "https://imgtr.ee/images/2023/07/01/039f0a0c2945a7d72c97fadede1d771c.jpeg",
        songs: [
          {
            id: "1",
            name: "tipshula.mp3",
            artist: "youngA",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688229940/tipshola_wurqud.mp3"
          },
          {
            id: "2",
            name: "toothbrush_akc7w9",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231174/toothbrush_akc7w9.wav"
          },
          {
            id: "3",
            name: "giant_shoes_mlxh2q",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235032/giant_shoes_mlxh2q.wav"
          },
          {
            id: "4",
            name: "ONE_MORE_dga0we",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231173/ONE_MORE_dga0we.wav"
          },
          {
            id: "5",
            name: "MAPAL_yf2rt1",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231161/MAPAL_yf2rt1.wav"
          },
          {
            id: "6",
            name: "תרוץ_לעצלנות_x6rgl5",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231168/%D7%AA%D7%A8%D7%95%D7%A5_%D7%9C%D7%A2%D7%A6%D7%9C%D7%A0%D7%95%D7%AA_x6rgl5.wav"
          },
          {
            id: "7",
            name: "DIMAA_vcb0qj",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688232249/DIMAA_vcb0qj.wav"
          },
          {
            id: "8",
            name: "BOO_OT_sshfrd",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688231167/BOO_OT_sshfrd.wav"
          },
          {
            id: "9",
            name: "distant_qqyvli",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235048/distant_qqyvli.wav"
          },
          {
            id: "10",
            name: "eilam_beat_rxuznm",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235039/eilam_beat_rxuznm.mp3"
          },
          {
            id: "11",
            name: "Sunscreen_j2ak4l",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235037/Sunscreen_j2ak4l.wav"
          },
          {
            id: "12",
            name: "nostalgic_black_mv411d",
            artist: "nadav",
            url: "https://res.cloudinary.com/dfimrgkuh/video/upload/v1688235032/nostalgic_black_mv411d.wav"
          },
          
        ],
      },
    ]
  };
  
  const paths = data.playlists.map((playlist: any) => ({
    params: { slug: playlist.id },
  }))
  return { paths, fallback: false }
}

const Playlist: React.FC<Props> = ({ playlist }) => {
  return (
    <>
      <PlaylistView playlist={playlist} />
    </>
  )
}

export default Playlist
