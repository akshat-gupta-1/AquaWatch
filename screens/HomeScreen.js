import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
const HomeScreen = () => {
  const apiKey = 'pk.462f871ea1c7be47505115ed16f0f841';
  return (
    <View style={styles.page}>
      <LeafletView
        mapLayers={[
          {
            url: `https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=${apiKey}`,
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
export default HomeScreen;
