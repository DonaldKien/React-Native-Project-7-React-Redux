import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


class Home extends React.Component {

  	constructor () {
    	super ();
  	}

	// handleIncrement = () => {
    //     this.setState({
    //         counter: this. state.counter + 1
    //     })
	// }
	// <TouchableOpacity style={styles.buttonStyle} onPress={this.state.handleIncrement}>

    // handleDecrement = () => {
    //     this.setState({
    //         counter: this. state.counter - 1
    //     })
	// }
	// <TouchableOpacity style={styles.buttonStyle} onPress={this.state.handleDecrement}>

	// export default connect(mapStateToProps) (Home);

  	render () {

		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.buttonStyle} onPress={this.props.decrement}>
					<Text style={styles.btnText}>-</Text>
				</TouchableOpacity>
				<Text style={styles.outputText}>{this.props.counter2}</Text>
				<TouchableOpacity style={styles.buttonStyle} onPress={this.props.increment}>
					<Text style={styles.btnText}>+</Text>
				</TouchableOpacity>
			</View>
		)
  	}
}

function mapStateToProps (state1) {
	return {counter2: state1.counter1 }
}

function mapDispatchToProps (dispatch) {
	return {
		increment: () => dispatch({type: 'INCREMENT'}), decrement: () => dispatch({type: 'DECREMENT'})
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
 	},
 	buttonStyle: {
		backgroundColor: 'indigo',
		padding: 20
  	},
  	btnText: {
		color: 'white'
  	},
  	outputText: {
		padding: 20
  	}
});