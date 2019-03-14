import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state={
    menuSelected: null,
    selected: 'profile'
  }

  getMenuSelect = (selectedItem) =>{
    
    switch(selectedItem){
      case 'profile': this.setState({ menuSelected: <Profile />, selected: selectedItem })
      break;
      case 'photo': this.setState({ menuSelected: <Photos />, selected: selectedItem })
      break;
      case 'cocktail': this.setState({ menuSelected: <Cocktails />, selected: selectedItem })
      break;
      case 'pokemon': this.setState({ menuSelected: <Pokemon />, selected: selectedItem })
    }
    // this.setState({
    //   menuSelected: selectedItem
    // })
  }

  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar getMenuSelect={this.getMenuSelect} selected={this.state.selected}/>
        {this.state.menuSelected}
      </div>
    )
  }

}

export default MainBox
