import React from 'react'
import { Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  gridItem: {
    margin: 5,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gridItemImage: {
    width: 100,
    height: 100,
  },
  col: {
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
  data,
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

  const renderGridItem = (item) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => console.log(item.item.id)}>
        <Image style={styles.gridItemImage} source={{ uri: item.item.image }} />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <FlatList
        contentContainerStyle={styles.grid}
        data={data}
        numColumns={3}
        renderItem={(item) => renderGridItem(item)}
      />
    </>
  )
}

export default CharacterGrid
