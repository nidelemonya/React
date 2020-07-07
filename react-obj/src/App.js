import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Dog extends Component {
  constructor(){
    super();
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }
  bark(){
      console.log('bark');
      this.setState({
        isBarking: true
      })
      // this.run();
  }
  run() {
      console.log('run');
      this.setState({
        isRunning: true
      })
      setTimeout(()=> {
        this.setState({
          isRunning:false,
          isBarking:false
        },() => {
          console.log('不叫了，停下来了')
        })
      },2000)
  }
  barkAndRun(){
    this.bark();
    this.run();
  }

  render() {
      return (
      // <div onClick={this.bark.bind(this)}>
      <div onClick={this.barkAndRun.bind(this)}>
          dog
      </div>);
  }
}

class Poem extends Component {
  constructor(){
    super();
  }
  computer() {
    console.log(this.p.offsetHeight);
    console.log(this.p.clientHeight);
  }
  componentDidMount() {
    this.computer();
  }
  render() { 
    const { content } = this.props;
    return ( 
    <p ref={(p) => this.p = p}>
      {content}
    </p>
    )
  }
}

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      message_count: 0
    }
  }
  render() {
    const {content} = this.props;
    return (<div>
      {content}
    </div>);
  }
}

function App() {
  return (
    <div className="App">
      <Poem content={"君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不复醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"}>
      </Poem>
      <Dog></Dog>
      <Notification content={"shuifdhai"}></Notification>
    </div>
  );
}

export default App;
