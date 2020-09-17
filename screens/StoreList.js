import React, {Component} from "react";
import {FlatList, View, Text, StyleSheet, Image,TouchableOpacity} from "react-native";

export default class StoreList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <FlatList data={this.props.initialData}
                      renderItem={this.renderItem}/>
        );
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                console.log(item)
            }}>
                <View style={styles.whiteView}>
                    <Image style={styles.image} source={{uri:item.image_url}}/>
                    <View style={styles.line}/>
                    <View style={styles.rowBottom}>
                        <Text style={styles.rowTitle}>{item.alias} </Text>
                        <View style={styles.timeStarContainer}>
                            <View style={styles.iconTextContainer}>
                                <Image style={styles.iconCar} source={require('../assets/images/icon_car.png')}/>
                                <Text style={styles.rowTime}>30min</Text>
                            </View>
                            <View style={styles.iconTextContainer}>
                                <Image style={styles.iconCar} source={require('../assets/images/icon_star.png')}/>
                                <Text style={styles.rowTime}>30min</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        paddingTop: 8,
    },
    whiteView: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 4,
    },
    image: {
        height: 80,
    },
    line: {
        height: 3,
        backgroundColor: 'black',
    },
    rowBottom: {
        padding: 8,
    },
    rowTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    timeStarContainer: {
        flexDirection: 'row',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 4,
    },
    iconCar: {
        width: 9,
        height: 8,
        marginRight: 4,
    },
    rowTime: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    rowStar: {
        fontSize: 10,
        fontWeight: 'bold',
    }
});

