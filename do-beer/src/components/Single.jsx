import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types"; // 校验所有的参数的类型 props
// Statefulcomponent StatelessComponent
// 开发流程
class Single extends React.Component {
    static propTypes = {
        params: PropTypes.object
    }
    constructor(){
        super();
        this.state = {
            beer: {},
            loading: true // react 业务经验
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params)
        // console.log(`searching for ${this.props.match.params.beerId}`);
        this.loadBeer(this.props.match.params.beerId)
    }

    loadBeer = (beerId) => {
        this.setState ({ loading: true })
        fetch(`http://api.react.beer/v2/beer/${beerId}`)
            .then(data => data.json())
            .then(res => {
                this.setState({
                beer: res.data,
                loading: false
                })
            })
    }

    render() {
        const { beer } = this.state;
        // if (!beer.labels) {
        //     beer.labels = 'null.jpg' ;  //图片兼容性
        // }
        let image = beer.labels ? beer.labels.large: 'null.jpg';
 
        if (this.state.loading) {
            return (
                <div>loading...</div>
            )
        }
        return(
            <div>
                <Header siteName="Beer me!"></Header>
                <div className="single-beer">
                    <div className="desc">
                        <h2>{beer.name}</h2>
                        <p>{beer.desription}</p>
                    </div>
                    <img className="label" src={image} alt={beer.name}/>
                    <div className="style">
                        <h3>More Info on {beer.style.name}</h3>
                        <p>{beer.style.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Single;