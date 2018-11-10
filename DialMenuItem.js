import React, { Component } from 'react';
import {
    ViewPropTypes,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

import PropTypes from 'prop-types';


class DialMenuItem extends Component {
    constructor(props) {
      super(props)
    }

	render(){

		return(
			  <TouchableOpacity style={styles.iconStyle}
				onPress={() => this.props.onPress()}>
               
                <Image  style={{ width: 21.5, height:25, resizeMode: 'contain', tintColor: this.props.iconsColor}} 
                source= {this.props.imageSource} />
                 <Text style={[styles.title, {color: this.props.textColor}]}> {this.props.title} </Text>
             
			  </TouchableOpacity>
              
		)
    }
}
const styles = StyleSheet.create({
    toutchContent: {
        resizeMode: 'contain',
        height: '60%',
        width: '15%'
      },
      title: {
        fontSize: 10,
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        paddingTop: 6
      },
      iconStyle: {
          flex: 1,
          marginTop: 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          

      },
});

DialMenuItem.defaultProps = {
	active: false,
    iconName: undefined,
    imageSource: undefined,
    textColor: "white",
    iconsColor: 'white',
	onPress: () => {},
}

DialMenuItem.propTypes = {
    imageSource: undefined,
    onPress: () => {},
    textColor: "white",
    iconsColor: "white",
	active: PropTypes.bool,
	activeContainerStyle: ViewPropTypes.style,
    onPress: PropTypes.func,
    title : ""
}
export default DialMenuItem;
export { DialMenuItem };