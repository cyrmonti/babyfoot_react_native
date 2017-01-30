import React from 'react';
import { View, Text, ListView, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { deleteBabyfoot } from '../actions'

class ListBabyfoots extends React.Component {

    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ babyfoots }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(babyfoots);
    }

    renderRow(babyfoot) {
        return (
          <TouchableWithoutFeedback onPress={() => { this.props.deleteBabyfoot(babyfoot.id) }}>
              <View>
                  <CardSection>
                      <Text style={styles.titleStyle}>{babyfoot.id} - {babyfoot.name}</Text>
                  </CardSection>
              </View>
          </TouchableWithoutFeedback>
        );
    }

    renderList() {
        if (!this.props.babyfoots.length) {
            return (
              <Text>No babyfoots in the list...</Text>
            );
        }
        else {
            return (
              <ScrollView>
                  <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections
                  />
              </ScrollView>
            );
        }

    }


    render() {
        return this.renderList();
    }
}

const mapStateToProps = state => {
    return {
        babyfoots: state.babyfoots,
    };
};

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
};

export default connect(mapStateToProps, { deleteBabyfoot })(ListBabyfoots);