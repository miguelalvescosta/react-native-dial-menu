import React, {Component} from 'react';
import {
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

export default class PlusButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    

    rotate() {
        if (!this.state.active) {
            Animated.spring(this.topBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: .9
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.topBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0
            }).start();
        }
    }


   

    _animate(active) {
        this.setState({active});
        const {props: {type}} = this;
        this.rotate();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            this._animate(nextProps.active);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                active: this.props.active
            });
        }, 0);
    }

    render() {

        const {props: {color, type}} = this;

        if (this.props.active) {
        
            
                this.topBar = this.topBar || new Animated.Value(0.9);
                this.bottomBar = this.bottomBar || new Animated.Value(0.9);
               
            
        }

        this.containerAnim = this.containerAnim || new Animated.Value(0);
        this.topBar = this.topBar || new Animated.Value(0);
        this.bottomBar = this.bottomBar || new Animated.Value(0);
        

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.onPress ? this.props.onPress() : undefined
                }}>
                <Animated.View style={{
                    width: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 25,
                    transform: [
                        {
                            rotate: this.containerAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    '0deg', '360deg'
                                ],
                            })
                        }
                    ]
                }}>
                    <Animated.View style={{
                        height: 2,
                        
                        width: "70%",
                       
                        backgroundColor: color ? color : 'white',
                        transform: [
                            {
                                rotate: this.topBar.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        '0deg', '-50deg'
                                    ],
                                })
                            }
                        ]
                    }}/>
            
                    <Animated.View style={{
                        height: "70%",
                        
                        borderLeftWidth: 2,
                        borderLeftColor: 'white',
                        position: 'absolute',
                        
                        transform: [
                            {
                                rotate: this.bottomBar.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        '0deg', '-50deg'
                                    ],
                                })
                            }
                        ]
                    }}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}