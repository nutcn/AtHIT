import React from 'react-native'

const {
  StyleSheet,
  WebView,
  View,
} = React;

const testURL = 'http://app.athit.co/articles/article/17067/';

class ArticleContentView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <WebView
          url={this.props.articleURL}
          style={styles.container}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginBottom: 44,
  },

});

export default ArticleContentView;
