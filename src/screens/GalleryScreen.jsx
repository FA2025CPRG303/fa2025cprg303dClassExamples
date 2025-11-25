import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ArtworkComp from '../components/gallery/artwork';
export default function GalleryScreen() {
  const [singleArtwork, setSingleArtwork] = useState(null);
  const [artChange, setArtChange] = useState(0);
  const [testIds, setTestIds] = useState([
      '436598',
      '436188',
      '438624',
      '437547',
      '438644',
      '436598',
      '437589',
      '437460',
      '435907',
      '435968',
    ])

  async function getArtworkByID(artId) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`,
      );
      //   console.dir(response);
      if (!response.ok)
        console.log(`Error: ${response.status}: ${response.statusText}`);
      const data = await response.json();
      setSingleArtwork(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const validIds = [
      '436598',
      '436188',
      '438624',
      '437547',
      '438644',
      '436598',
      '437589',
      '437460',
      '435907',
      '435968',
    ];
    let validIdIndex = Math.floor(Math.random() * testIds.length);
    getArtworkByID(testIds[validIdIndex]);
  }, [artChange]);

  //   getArtworkByID(); // Don't do this!

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>API Art Gallery</Text>
      {singleArtwork ? (
        <ArtworkComp artworkObj={singleArtwork} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Button
        title="Get new Artwork"
        onPress={() => setArtChange(Math.random())}
      />
    </View>
  );
}
