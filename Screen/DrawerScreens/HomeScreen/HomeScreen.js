
import { _ } from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView } from 'react-native';
import HomeContent from "./HomeContent";
import Loader from '../../Components/Loader';
import {getHomePageData} from "../../reduxStore/ducks/Home.actions";
class HomeScreen extends React.Component {
  constructor({ router, navigation, props }) {
    super(router, navigation, props)
  }
  componentDidMount() {
    this.props.getHomePageData()
  }

  render() {
    return <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Loader loading={this.props.isLoading} />
        {
          !this.props.isLoading && _.map(this.props.homeData, (item, key) => {
            return <HomeContent key={key} data={item} />
          })
        }
      </View>
    </ScrollView>
  }
}
const mapStateToProps = (state) => {
  const { Home } = state
  return {
    isLoading: Home.isLoading,
    homeData: Home.homeData
  }
}
const mapDispatchToProps = {
  getHomePageData
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
  }
});
