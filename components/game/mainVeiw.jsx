import { OrbitControls, View } from '@react-three/drei'
import React from 'react'
import { Ball } from './Ball'
import * as Extras from './Extras'
import IsometricCamera from './IsometricCamera'

function MainView({viewRef}) {
  return (
    <View track={viewRef} index={2}>
      <IsometricCamera mainCamera />
      <Ball/>
      <Extras.Floor />
      <Extras.Lighting />
    </View>
  )
}

export default MainView
