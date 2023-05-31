import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

const styles = StyleSheet.create({
  grid: {
    height: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  row: {
    height: 200,
    width: '100%',
    justifyContent: 'space-between',
  },
  col: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
})
function ImageGrid({
  character1,
  character2,
  character3,
  setCharacter1,
  setCharacter2,
  setCharacter3,
}) {
  const onPress = () => {
    if (character1 === null) {
      setCharacter1(id)
    }
    if (character1 !== null && character2 === null) {
      setCharacter2(id)
    }
    if (character1 !== null && character2 !== null && character3 === null) {
      setCharacter3(id)
    }

    if (character1 !== null && character2 !== null && character3 !== null) {
      setCharacter3(id)
    }
  }

  return (
    <Grid style={styles.grid}>
      <Row>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
  )
}

export default ImageGrid
