# react-native-dial-menu
A cross-platform (iOS / Android), dial menu

## Demo

<iframe src="https://giphy.com/embed/4ZgCJ3mRmZz80PMx8d" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/4ZgCJ3mRmZz80PMx8d">via GIPHY</a></p>
<a href="https://giphy.com/gifs/4ZgCJ3mRmZz80PMx8d"></a>

## Install

```sh
npm i react-native-dial-menu
```

## Usage



```jsx

import DialMenu  from 'react-native-dial-menu';
import DialMenuItem from 'react-native-dial-menu';


export default class MyMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{height: 80, bottom: 0}}>
       <Dialmenu type={"left"} menuColor= {'#5EADD6'} buttonColor= {"#405E70"}  style={{height: '30%'}}>
            
       <DialMenuItem imageSource={require('./Assets/home.png')} title={"Home"} textColor= {"white"} iconsColor= {"white"}/>
             <DialMenuItem imageSource={require('./Assets/store.png')} title={"Store"}  textColor= {"white"} iconsColor= {"white"}/>
             <DialMenuItem imageSource={require('./Assets/cart.png')} title={"Cart"}   textColor= {"white"} iconsColor= {"white"}/>
             <DialMenuItem imageSource={require('./Assets/travel.png')} title={"Travel"}  textColor= {"white"} iconsColor= {"white"}/>
          
          </Dialmenu>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
```

## Props
Dial Menu
* `menuColor - ""` Background Menu color
* `buttonColor - ""` Round Button color 

Dial Menu item
* `imageSource - ""` Require image source
* `title - ""`  Item title
* `textColor - ""`  Item title color
* `iconsColor - ""`  icon color


