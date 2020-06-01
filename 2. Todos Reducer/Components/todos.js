import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

class Home extends React.Component {

    constructor () {
        super ();
        this.state = {
            input : ''
        }
    };

    handleInputText = (text1) => {
        this.setState({
            input: text1
        })
    };

    handleAdd = () => {
        this.props.addItem(this.state.input);
        this.setState({
            input: ''
        })
    };

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.inputRow}>
                    <View style={styles.textInput}><TextInput placeholder='Enter notes' onChangeText={ (text1) => this.handleInputText(text1)} value={this.state.input}/></View>
                    <TouchableOpacity style={styles.addBtn} onPress={ () => this.handleAdd() }><View style={styles.btnStyle}><Entypo name='add-to-list' size={20}/></View></TouchableOpacity>
                </View>
                <FlatList 
                style={styles.flatList}
                data={this.props.data1} 
                keyExtractor = { item1 => item1.id }
                renderItem = { ({item, index}) => 
                    <View style={styles.outputRow}>

                        <TouchableOpacity style={styles.doneBtn} onPress={ () => this.props.doneItem(item.id) }>
                            <View><Text>{item.completed ? <MaterialIcons name="done" size={20} color="#0fb300"/> : <MaterialIcons name="clear" size={20} color="#db7900"/>}</Text></View>
                        </TouchableOpacity>

                        <Text style={styles.outputFont}>{item.name}</Text>

                        <TouchableOpacity style={styles.deleteBtn} onPress={() => this.props.deleteItem1(index)}>
                            <View><Text style={styles.deleteText}>Delete</Text></View>
                        </TouchableOpacity>

                    </View> 
                }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data1: state.todos
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (text2) => dispatch({type:'ADD_ITEM', text2}),
        deleteItem1: (index1) => dispatch({type:'DELETE_ITEM', index1}),
        doneItem: (doneId) => dispatch({type:'DONE_ITEM', doneId})
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical: 40
    },
    inputRow: {
        flexDirection:'row',
        marginBottom: 10,
        backgroundColor: '#dedede'
    },
    textInput: {
        padding: 10,
        width: '80%'
    },
    btnStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    addBtn: {
        backgroundColor:'#dedede',
        padding: 5,
        width: '10%'
    },
    flatList: {
        width:'90%'
    },
    outputRow: {
        margin: 5,
        backgroundColor: '#ebebeb',
        flexDirection:'row'
    },
    outputFont: {
        flex:7,
        fontSize: 15,
        padding: 10
    },
    doneBtn: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ebebeb',
    },
    deleteBtn: {
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ebebeb'
    },
    deleteText: {
        color:'red'
    }
});