import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
  grid: {
    height: '100%',
    marginTop: 50,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})

function SelectedCharactersGrid() {
  return (
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
  )
}

export default SelectedCharactersGrid
