import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class App extends React.Component {

state = {
  name: "",
  email: "",
  age: "",
  phoneNumber: "",
}

handleReset = () => {
  this.setState({name: ''})
  this.setState({email: ''})
  this.setState({age: ''})
  this.setState({phoneNumber: ''})
}


render(){
  return (
    <View style={styles.container}>
      <View style={{ height: hp('20%') }}></View>
      <View style={styles.modelPlaceholder}>

      <View style={{ height: hp('2%') }}></View>
        <Text style={styles.header}>Insert Data</Text>

        <TextInput 
          style={styles.textInput}
          placeholder={'Name'}
          onChangeText={name => this.setState({name})}
          value={this.state.name} />
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          onChangeText={email => this.setState({email})}
          value={this.state.email} />
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          placeholder={'Age'}
          onChangeText={age => this.setState({age})}
          value={this.state.age}
          maxLength={2}
          />
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          placeholder={'Phone number'}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          value={this.state.phoneNumber}
          maxLength={11}
          />
        <StatusBar style="auto" />


        <View style ={[{width:wp("50%"), marginBottom: hp('3%')}]}>
          <Button
            color="#841584"
            title="Submit">
            Submit
          </Button>
        </View>

        <View style ={[{width:wp("50%"), marginBottom: hp('3%')}]}>
            <Button
            onPress = {this.handleReset}
            color="#841584"
            title="Reset">
              Reset
            </Button>
        </View>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3895d3',
  },
  modelPlaceholder :{
    marginTop: hp('2%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 55,
    marginBottom: hp('1%'),
  },
  textInput: {
    borderWidth : 1,
    borderRadius: 10,
    borderColor : '#464646',
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: wp('80%'),
    marginBottom: hp('2%'),
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  button: {
    backgroundColor: '#ffffed',
    width: wp('40%'),
    alignItems: 'center',
  }
});
