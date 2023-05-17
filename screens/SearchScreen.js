import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import SearchResults from '../components/SearchResults'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchScreen = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data from Firebase Firestore
    const fetchPlaces = async () => {
      const placesCollection = collection(db, 'places')
      const placesSnapshot = await getDocs(placesCollection)
      const placesData = placesSnapshot.docs.map(doc => doc.data())
      setData(placesData)
    }

    fetchPlaces()
  }, [])
  const [items, setItems] = useState([])

  useEffect(() => {
    if (items.length > 0) return

    const fetchProducts = async () => {
      const colRef = collection(db, 'places')

      const docsSnap = await getDocs(colRef)
      docsSnap.forEach(doc => {
        items.push(doc.data())
      })
    }

    fetchProducts()
  }, [items])
  console.log(items)
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderColor: '#FFC72C',
          borderWidth: 4,
          borderRadius: 10
        }}
      >
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="Enter Your Destination"
        />
        <Feather name="search" size={22} color="black" />
      </View>

      <SearchResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
