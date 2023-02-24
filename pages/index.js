import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import {
//   browserName,
//   browserVersion,
//   deviceType,
//   osName,
//   osVersion
// } from "react-device-detect";
import styles from '../styles/Home.module.css'
const ChatBot = dynamic(import('../components/chatbot'), { ssr: false })

class Home extends React.Component {
  state = {
    ip: {}
  }
  // componentDidMount() {
  //   this.setState({
  //     iploading: true
  //   })
  //   fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
  //     this.setState({
  //       ip: data,
  //       iploading: false
  //     })
  //     console.log(data)
  //   }).catch(err => {
  //     console.err(err);
  //     this.setState({
  //       iploading: false
  //     })
  //   })
  // }
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Chat bot sandbox with NextJS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <ChatBot />
          <div className={styles.grid}>
            <h1>Hello welcome to ChatApp 8080</h1>
          </div>
        </main>
      </div >
    )
  }
}

export default Home
