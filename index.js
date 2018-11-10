import React from 'react';
import {StyleSheet,
  Text,
  View, 
  Animated, 
  Dimensions,	
  ViewPropTypes, 
  Image,
  TouchableOpacity,
  Button} from 'react-native';
import PropTypes from 'prop-types'
import PlusButton from './plusButton'
import DialMenuItem from './DialMenuItem'


const { width, height } = Dimensions.get("window");

export default class DialMenu extends React.Component {
    constructor(props){
        super(props);
        const defaultStyles = {
           borderColor: '#fff',
           backgroundColor: 'transparent',
            color:'#fff',
            monthlyLoanPayment: 0
          };
        const customStyles = Object.assign(defaultStyles, props.customStyles);
        this.state = {
            customStyles,
            active: false,
        }
        this.progressAnim 
        
    }
 
  componentWillMount(){
    if(this.props.type === "left"){
        this.progressAnim = new Animated.Value(width)
          
      }else{
        this.progressAnim = new Animated.Value(width)
       
      }
   
  }
  onShowMenu = () => {
    this.setState({ active: !this.state.active })
    var animateToPosition = 0
      if (!this.state.active === false){
           animateToPosition =  width
      }else{
           animateToPosition = 0
      }
    Animated.sequence([
        Animated.timing(
          this.progressAnim,
          {toValue: animateToPosition,duration:200}
        )
    ]).start();
  }
  renderCircleButton = () => {
    let circlePositionStyle;
      if(this.props.type === "left"){
        
          circlePositionStyle = {
            marginTop: 0,
            start: 12,
          }
      }else{
        
        circlePositionStyle = {
            marginTop: 0,
            end: 12,
          }
      }
      return(
            <View style={[styles.circleButton, circlePositionStyle, {backgroundColor: this.props.buttonColor}]}>
                <PlusButton active={this.state.active} onPress={() => { this.onShowMenu()}}underlayColor="transparent" >
                </PlusButton>
            </View>
      )
  }
  renderMenuItems = () => {
    const { children } = this.props;
    const menuItems = !Array.isArray(children) ? [children] : children;
    let itemsStyle;
    let animStyle;
    
    if(this.props.type === "left"){
        itemsStyle = {
            left: 60, 
        }
        animStyle = {
            right: this.progressAnim 
        }
    }else{
        itemsStyle = {
            marginRight: 10
        }
        animStyle = {
            left: this.progressAnim 
        }
    }

    return (
        <Animated.View style={[styles.menuContent, animStyle, {backgroundColor: this.props.menuColor} ]}>
        <View style={[styles.menuItem, itemsStyle]} pointerEvents={"box-none"}>
            {menuItems.map((DialMenu, idx) => (
                <DialMenuItem
                key={idx}
                {...this.props}
                {...DialMenu.props}
                onPress={() => { this.onShowMenu()}}
                />
            ))}
        </View>
        </Animated.View>
    )

}

    render(){
        
        return(

                    
            <View style={styles.MainContainer}>    
                {this.renderMenuItems()}
                {this.renderCircleButton()}
                
            </View>
 
         
        );
    }
   
   
   
   
   
}





const styles = StyleSheet.create({
    MainContainer: {
       flex: 1,
       flexDirection: 'row',
       backgroundColor: 'transparent',
        width: '100%',
        
      
        
       
      },
      menuContent: {
        flex:1, 
        flexDirection: 'row',
        height: '95%', 
        alignSelf: 'flex-end', 
        justifyContent: 'space-between',
        

      },
      pinImage:{
        resizeMode: 'contain',
        height: '50%',
        width: '50%'
      },
      menuItem : {
        flexDirection: 'row', 
         justifyContent: 'space-between',
         flex:0.8, 
         marginTop: 5,
        
        
      },
      circleButton:{
        width: 56,
        height: 56,
        borderRadius: 100/2,
        
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        
      },
      itemsContainer: {
        flexDirection: 'row',
        paddingTop: 15,
      },



});

  DialMenu.defaultProps = {
    menuColor: "#405E70",
    buttonColor: '#5EADD6',
    type: "left",
    itemsContainer: ViewPropTypes.style,
	itemsContainerBackgroundStyle: ViewPropTypes.style,
   
  };
  DialMenu.propTypes = {
    menuColor: "",
    buttonColor: '',
    menuColor: "",
    type: "",
    itemsContainer: ViewPropTypes.style,
	itemsContainerBackgroundStyle: ViewPropTypes.style,
}