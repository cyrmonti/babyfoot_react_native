import React from 'react';
import { View, Text, ListView } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux'

class ListBabyfoots extends React.Component {

	componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.babyfoots);
    }

    renderRow(babyfoot) {
        return (
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>{babyfoot.name}</Text>
                </CardSection>
            </View>
        );
    }


    render() {
        return (
            <ListView
            	dataSource={this.dataSource}
            	renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        babyfoots: state.babyfoots,
    };
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(mapStateToProps)(ListBabyfoots);