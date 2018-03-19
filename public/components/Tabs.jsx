import React, {Component} from 'react';

const styles = {}
styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
}

styles.activeTab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  cursor: "pointer",
  borderBottomColor: "#000",
}
styles.panel = {
  padding: "10px"
}

 class Tabs extends Component{
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }

  this.handleClick = this.handleClick.bind(this)
}
handleClick(activeIndex) {
    this.setState({
      activeIndex,
    });
  }

render() {
      const { data } = this.props
      //const { activeIndex } = this.state

      const tabs = data.map((country, index) => {
        const isActive =  index === this.state.activeIndex;
        const style = isActive ? styles.activeTab : styles.tab;

        return (
          <div
            key ={country.id}
            style={style}
            onClick = {() => this.handleClick(index)}
            >
             {country.name}
          </div>
        )
      })
      const content = data[this.state.activeIndex].description
      return(
        <div >
          <h1><b>Countries</b></h1>
          {tabs}
          <div  style={styles.panel}></div>
        {content}
        </div>

    );
  }
}

module.exports = Tabs
