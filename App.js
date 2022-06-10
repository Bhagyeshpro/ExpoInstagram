import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.contianer}>
      <Image
        style={styles.stretch}
        source={{uri: "https://i.pinimg.com/originals/8d/31/59/8d3159009b00f1e05c5e3faa4885b922.jpg"}}
      />
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  contianer: {
    alignItems: "center",
    backgroundColor: "#abb0b3",
    flex: 1,
    justifyContent: "center"
  },
  stretch: {
    marginTop: 10,
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
})