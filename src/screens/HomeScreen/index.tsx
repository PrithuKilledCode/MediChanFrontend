import React from 'react'
import Navbar from '../../components/Navbar'
import MediChanComponent from '../../components/MediChanComponent'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
  <>
  <Navbar/>
  <MediChanComponent/>
  </>
  )
}

export default HomeScreen