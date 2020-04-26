import React from 'react';
import './App.module.css';
import Auxilary from './hoc/Auxilary';
import { Layout } from './containers/Layout/Layout';

function App() {
  return (
    <Auxilary>
        <Layout>
          
        </Layout>
    </Auxilary>
  );
}

export default App;
