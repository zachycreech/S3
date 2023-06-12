import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

const styles = StyleSheet.create({
  grid: {
    margin: 10,
  },
  row: {
    height: 120,
  },
  col: {
    height: 200,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
})
function CharacterGrid({
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
  const renderRows = () => {
    return (
      <Row style={styles.row}>
        <Col size={1} style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1} style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: 'https://placekitten.com/200/300',
              }}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1} style={styles.col}>
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
    )
  }

  return (
    <Grid style={styles.grid}>
      {renderRows()}
      {renderRows()}
      {renderRows()}
    </Grid>
  )
}

export default CharacterGrid
