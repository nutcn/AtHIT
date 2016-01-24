/**
 * 文章列表页
 */

'use strict'
 import React, {
   Component,
   StyleSheet,
   View,
   Text,
   ListView,
 } from 'react-native'

import ArticleListService from './ArticleListService'

class ArticleView extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows([]),
      status: 'loading',
    };
  }

  componentWillMount() {
    const fetchData = ArticleListService.fetchArticleList()
                      .then(result => {
                        let articleList = result.articles;
                        this.setState({
                          status: 'done',
                          dataSource: this.state.dataSource.cloneWithRows(articleList || []),
                        });
                      });
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  async fetchArticleListData() {

  }

  renderRow() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.test}>
          测试测试测试
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  test: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
})

module.exports = ArticleView
