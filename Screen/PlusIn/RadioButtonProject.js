import React from 'react';
import { View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



export default class RadioButtonProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
    }
    render() {
        let radio_props = [
            { label: 'Private', value: 0 },
            { label: 'Public', value: 1 }
        ];
        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={this.state.value}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    selectedButtonColor={'#0ff12a'}
                    animation={true}
                    style={{marginRight:10}}
                    onPress={(value) => { this.props.setValue(value) }}
                />
            </View>
        );
    }
}