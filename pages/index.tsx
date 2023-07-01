import Head from 'next/head'
import { Grid } from '@components/UI'
import { ArtistCard } from '@components/common'
import { PlaylistCard } from '@components/Playlist/PlaylistCard'



interface Playlist {
  id: number;
  title: string;
  imageUrl: string;
}

interface Artist {
  id: number;
  name: string;
  imageUrl: string;
}

interface Data {
  playlists: Playlist[];
  Artists: Artist[];
}

export async function getStaticProps() {
  let data: Data = {
    playlists: [
      {
        id: 1,
        title: 'CoRruPted_tEleTubbies.mid',
        imageUrl: 'https://imgtr.ee/images/2023/07/01/039f0a0c2945a7d72c97fadede1d771c.jpeg',
      },
      // Add more playlists as needed
    ],
    Artists: [
      {
        id: 1,
        name: 'nadav',
        imageUrl: 'https://imgtr.ee/images/2023/07/01/3b88b29ef36664fc4c6add71b8d4f806.jpeg',
      },
      {
        id: 2,
        name: 'youngA',
        imageUrl: 'https://imgtr.ee/images/2023/07/01/c594bbd3b633451285c73b86a2120852.jpeg',
      },
      // Add more artists as needed
    ],
  };

  return {
    props: {
      data,
    },
  }
}


const Home = (props: { data: any; error: any }) => {
  const { data, ...rest } = props

  return (
    <div>
      <Head>
        <title>drunkproduced.xnxx</title>
        <meta name="description" content="Music site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <div className="col-span-2">
          <h1 className="text-2xl font-medium">Hot Albums</h1>
          <div className="flex flex-col gap-16">
            {data.playlists.map((playlist: any) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                title={playlist.title}
                img={playlist.imageUrl}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-xl font-medium">Top Artists</h1>
          <div className="flex flex-col gap-4">
            {data.Artists.map((artist: any) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                id={artist.id}
                imgUrl={artist.imageUrl}
              />
            ))}
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Home
function cn(root: any): string | undefined {
  throw new Error('Function not implemented.')
}
