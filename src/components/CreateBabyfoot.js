import React from 'react';
import { connect } from 'react-redux';
import { addBabyfoot } from '../actions';
import { Actions } from 'react-native-router-flux';


import { Card, CardSection, Input, Button } from './common';

class CreateBabyfoot extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    updateNameState(name) {
        //remove extra start or end spaces
        name = name.trim();
        this.setState({ name });
    }

    onPressButton() {
        if (this.state.name != '') {
            this.props.addBabyfoot(this.state.name);
            Actions.pop();
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Name'}
                        value={this.state.name}
                        onChangeText={this.updateNameState.bind(this)}
                        placeholder={'Arsenal F.C'}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }

}

export default connect(null, { addBabyfoot })(CreateBabyfoot);