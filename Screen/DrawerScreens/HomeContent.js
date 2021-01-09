import { _ } from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Image } from 'react-native';
import lightOff from '../../Image/lightOff.jpg'
import lightOn from '../../Image/lightOn.jpg'
import ButtonConten from "./ButtonConten";
import { updateState } from "../reduxStore/ducks/Home.actions";
import HomeModel from "../Model/HomeModel";

class HomeContent extends React.Component {
  constructor({ route, navigation, props }) {
    super(props)
    this.state = {
      data: null
    }

    this.setStatus = this.setStatus.bind(this)
  }
  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data != this.state.data) {
      this.setState({ data: nextProps.data })
      return true
    }
    return false
  }

  setStatus(item) {
    let otherProps = _.omit(item, ['setStatus'])
    otherProps.Status = otherProps.Status == "0" ? "1" : "0"
    this.props.updateState(otherProps)
  }
  render() {
    return this.state.data && <View>
      <Image
        style={styles.tinyLogo}
        source={this.state.data.Status === '0' ? lightOff : lightOn}
      />
      <ButtonConten key={this.state.data.key} setStatus={this.setStatus} {...this.state.data} />
    </View>
  }
}
const mapStateToProps = (state) => {
  const { Home } = state
  return {
    // isLoading: Home.isLoading,
    // homeData: Home.homeData
  }
}
const mapDispatchToProps = {
  updateState
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent)
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
