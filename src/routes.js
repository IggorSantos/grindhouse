import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './pages/landing'
import PlanetTerror from './pages/planetTerror.js'
import DeathProof from './pages/deathProof.js'
import FakeTrailers from './pages/fakeTrailers.js'
import About from './pages/about.js'

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/planetTerror" component={PlanetTerror} />
      <Route path="/deathProof" component={DeathProof} />
      <Route path="/fakeTrailers" component={FakeTrailers} />
    </BrowserRouter>
  )
}

export default Routes;
