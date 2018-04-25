import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import Layout from '../component/Layout';
import Sayisal from '../component/Sayisal';
import Onnumara from '../component/Onnumara';
import SansTopu from '../component/SansTopu';
import SuperLoto from '../component/SuperLoto';
import Main from '../component/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Main} />
          <Route  path="/sayisal" exact component={Sayisal} />
          <Route path="/sanstopu" exact component={SansTopu} />
          <Route path="/onnumara" exact component={Onnumara} />
          <Route path="/superloto" exact component={SuperLoto} />
        </Layout>
      </Router>
    );
  }
}

export default App;
