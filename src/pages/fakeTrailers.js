import React from 'react'
import Menu from '../components/menu'
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer'
import './styles.css'

export default () => {
  return (
    <div id="page">
     <Menu />
     <PageHeader name="Trailers falsos" />
     <div className="imgPoster">
      <iframe title="Fake Trailers" width="750" height="500" src="https://www.youtube.com/embed/51nzkz-H9Hk"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
     </div>
     <Footer />
    </div>
  )
}
