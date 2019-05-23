import React from "react";

class Opacity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacity: 1
        }

    }

    changeOpacity(){
        this.setState({opacity: this.state.opacity-0.2})
        if(this.state.opacity<=0.1){
            this.setState({opacity: 1})
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => this.changeOpacity(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                <p style={{opacity: this.state.opacity}}>This string fades and brights!</p>
            </div>
        )
    }
}


export default Opacity
