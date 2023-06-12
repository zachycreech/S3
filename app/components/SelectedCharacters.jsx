import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  grid: {
    height: '100%',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    width: '100%',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
})

function SelectedCharacters() {
  return (
    <View style={styles.container}>
      <View style={styles.container} />
      <Grid style={styles.grid}>
        <Row>
          <Col>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    </View>
  )
}

export default SelectedCharacters
