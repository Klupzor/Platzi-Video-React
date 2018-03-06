import React, {Component} from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: props.author
        }
    }
    handleClick = (event) => {
        console.log(this.props.image)
        this.setState({
            author: 'Otro loco!'
        })
    }
    render() {
        const styles = {
            container: {
                color: '44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className="Media" onClick={this.handleClick} >
                <div className="Media-cover">
                    <img 
                        src={this.props.image} 
                        alt=""
                        width={260}
                        height={160}
                        className= "Media-image"
                    />
                    <h3 className="Media-title" >{this.props.title}</h3>
                    <p className="Media-author" >{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])

}

export default Media
