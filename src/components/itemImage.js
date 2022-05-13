import ItemTitles from './itemTitle';

const React = require('react');

class ItemImage extends React.Component {
    render() {

        return(
            <React.Fragment>
                <img src={this.props.src} alt={this.props.alt} style={{height: '150px'}}/>,
                <ItemTitles />
            </React.Fragment>
        )
    }
}

export default ItemImage;