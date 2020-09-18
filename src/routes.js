import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './pages/landing'
import About from './pages/about'
import PlanetTerror from './pages/planetTerror'
import DeathProof from './pages/deathProof'
import FakeTrailers from './pages/fakeTrailers'

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
