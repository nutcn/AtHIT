import React from 'react-native'

const {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  Dimensions,
} = React;

var {screenHeight, width} = Dimensions.get('window');
const imageWidth = (width - 32) / 3;

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#898989',
    marginTop: 8,
    marginRight: 4
  },
  countNumber: {
    fontSize:12,
    color: '#cbcbcb',
    marginTop: 4,
    marginBottom: 8,
    marginRight: 4,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  images: {
    marginRight: 8,
    width: imageWidth,
    height: imageWidth * 0.667,
  },
  imageContainer: {
    marginBottom: 12,
    flexDirection: 'row',
  }
});

class ArticleCell extends React.Component {
  static protoTypes = {
    onSelect: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    article = this.props.articleModel;
    console.log(this.props.onSelect);
    return (
      <TouchableHighlight
        underlayColor='#efefef'
        onPress={this.props.onSelect.bind(this)}>

        <View style={styles.cell}>
          <Text style={styles.title}>
            {article.title}
          </Text>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{article.author}</Text>
            <Text style={styles.subtitle}>{article.department}</Text>
            <Text style={styles.subtitle}>{article.publish_time}</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.countNumber}>{article.click_count}</Text>
            <Text style={styles.countNumber}>{article.like_count}</Text>
            <Text style={styles.countNumber}>{article.comments_count}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.images} source={{uri: article.images[0]}} />
            <Image style={styles.images} source={{uri: article.images[1]}} />
            <Image style={styles.images} source={{uri: article.images[2]}} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderText(article) {

  }

}
export default ArticleCell;
