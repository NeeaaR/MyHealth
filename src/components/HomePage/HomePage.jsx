import { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import '../../css/App.css'
import Navbar from '../Navbar'
import Header from './Header'
import Main from './Main'

export default function Home() {
  const { user } = useSelector(state => state.auth);
  const { profile, loading } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Header/>
      <Main/>
    </div>
  )
}

