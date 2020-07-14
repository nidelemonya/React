import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Center from '../../components/center/Center';
import Footer from '../../components/footer/Footer';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header title="知识星球"/>
                <div className="container">
                    <Search/>
                    <Center/>
                </div>
                <Footer tag={{tag1:'星球',tag2:'动态',tag3:'发现',tag4:'我'}}/>
            </div>
         );
    }
}
 
export default Home;