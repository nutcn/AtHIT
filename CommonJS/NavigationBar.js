import React from 'react-native'
import ArticleView from './ArticleList/ArticleListView'

const {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Navigator,
} = React;

const NavigationBarRouteMapper = () => ({
    LeftButton(route, navigator, index, navState) {
      return null;//(
        // <TouchableOpacity>
        //   <Text style={styles.rightButton}>
        //     Previous
        //   </Text>
        // </TouchableOpacity>

      //);
    },
    RightButton(route, navigator, index, navState) {
      return (
        <TouchableOpacity>
          <Text style={styles.rightButton}>
            Next
          </Text>
        </TouchableOpacity>
      );
    },
    Title(route, navigator, index, navState) {
      return (
        <Text style={styles.title}>
          {route.name}
        </Text>
      );
    },
});

export default {
  renderNavigator() {
    const navigationTitle = '文章列表';
    return (
      <Navigator
         initialRoute={{ name: navigationTitle, component: ArticleView }}
         configureScene={() => {
           return Navigator.SceneConfigs.VerticalDownSwipeJump;
         }}
         renderScene={(route, navigator) => {
           let Component = route.component;
           if(route.component) {
             return <Component {...route.params} navigator={navigator} />
           }
         }}
         navigationBar={
           <Navigator.NavigationBar
              style={styles.navigtionBar}
              routeMapper= {NavigationBarRouteMapper()}
           />
         }
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#000',
    marginTop: 12,
  },
  navigtionBar: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
  },
  rightButton: {
    fontSize: 18,
    color: '#0c80ff',
    marginRight: 8,
    marginTop: 12,
  }
});
