import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { ipcRenderer } from 'electron'
const version = document.getElementById('version')

function Home() {
  ipcRenderer.send('app_version')
  ipcRenderer.on('app_version', (event, arg) => {
    ipcRenderer.removeAllListeners('app_version')
    version.innerText = 'Version ' + arg.version
  })

  const notification = document.getElementById('notification')
  const message = document.getElementById('message')
  const restartButton = document.getElementById('restart-button')
  ipcRenderer.on('update_available', () => {
    ipcRenderer.removeAllListeners('update_available')
    message.innerText = 'A new update is available. Downloading now...'
    notification.classList.remove('hidden')
  })
  ipcRenderer.on('update_downloaded', () => {
    ipcRenderer.removeAllListeners('update_downloaded')
    message.innerText =
      'Update Downloaded. It will be installed on restart. Restart now?'
    restartButton.classList.remove('hidden')
    notification.classList.remove('hidden')
  })

  function closeNotification() {
    notification.classList.add('hidden')
  }
  function restartApp() {
    ipcRenderer.send('restart_app')
  }

  return (
    <React.Fragment>
      <div className="font-jakarta min-h-screen w-screen bg-gradient-to-t from-gray-900 to-gray-400">
        <div id="notification" className="hidden">
          <p id="message"></p>
          <button id="close-button" onClick={closeNotification}>
            Close
          </button>
          <button id="restart-button" onClick={restartApp} className="hidden">
            Restart
          </button>
        </div>
        <Header></Header>
      </div>
    </React.Fragment>
  )
}

export default Home
