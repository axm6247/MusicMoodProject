import React from 'react';
import YouTubeLogo from '../images/YouTubeSquare.png';
class Searchbar extends React.Component {
    state = {
        term: 'Type Here to Search for Videos'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field' border-style = "solid">
                    
                        <label htmlFor="video-search" border-color= "black"><img height = "90px"className="profile-photo" src={YouTubeLogo} alt={"Logo"}/></label>
                        <br/>
                        <br/>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;