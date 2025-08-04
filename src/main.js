import './style.css'
import { createApp } from './app.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = createApp()
  app.mount('#app')
})