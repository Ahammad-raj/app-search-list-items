import React from 'react';
import List from "./components/list/list";
import Search from "./components/search/search";
import Opacity from "./components/opacity/opacity";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialItems: [
                "Apples",
                "Bread",
                "Vada",
                "Oats",
                "Oranges",
                "Grapes",
                "Banana"
            ],
            filteredItems: [
                "Apples",
                "Bread",
                "Vada",
                "Oats",
                "Oranges",
                "Grapes",
                "Banana"
            ]
        }
    }

    search = (e) => {
        e.preventDefault()
        let items = []
        if (e.target.value !== "") {
            items = this.state.initialItems.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
            this.setState({filteredItems: items});
        } else {
            this.setState({filteredItems: this.state.initialItems});
        }
    }


    render() {
        return (
            <div>
                <Search onSearch={this.search}/>
                <List items={this.state.filteredItems}/>

                <Opacity/>

            </div>
        )
    }
}

export default App