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
import ArticleCell from './ArticleCell'
import ArticleContentView from '../ArticleContent/ArticleContentView'

class ArticleView extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.pressArticleCellAtRow = this.pressArticleCellAtRow.bind(this);
    this.renderRow = this.renderRow.bind(this);

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

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <ArticleCell
        articleModel={rowData}
        onSelect={() => {this.pressArticleCellAtRow(rowData)}}
        key={rowData.id}
      />
    );
  }

  renderSeparator(sectionID, rowID,adjacentRowHighlighted) {
    return (
      <View style={styles.seperator} key={rowID}/>
    );
  }

  pressArticleCellAtRow = (rowData) => {
      this.props.navigator.push({
        name: rowData.title,
        component: ArticleContentView,
        params:{articleURL: rowData.url}
      });
  };

  render() {
    return (
      <ListView
       style={styles.container}
       dataSource={this.state.dataSource}
       renderRow={this.renderRow}
       renderSeparator={this.renderSeparator}
       />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 64,
  },
  seperator: {
    height: 0.5,
    marginLeft: 8,
    backgroundColor: '#e3e3e3',
  }
})

module.exports = ArticleView
