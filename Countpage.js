import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';




class Countpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTimerStart: false,
            timerDuration: 60000,
            resetTimer: false,
          };

          this.startStopTimer = this.startStopTimer.bind(this);
          this.resetTimer = this.resetTimer.bind(this);
          }
      startStopTimer() {
        this.setState({
            isTimerStart: !this.state.isTimerStart,
             resetTimer: false});
      }
      resetTimer() {
        this.setState({
            isTimerStart: false, 
            resetTimer: true});
      }



    
  componentDidMount(){
    this.setState({
        resetTimer: false,
        isTimerStart:  true,
    });
  }
    
 
  render() {
   
    return (
      <View style={styles.container}>
        <Text>countdown!</Text>

<Timer 
            totalDuration={this.state.timerDuration} msecs 
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
        
            //options for the styling
            handleFinish={handleTimerComplete}
            //can call a function On finish of the time 
            //  getTime={this.getFormattedTime}
             />

<TouchableHighlight onPress={this.startStopTimer}>
            <Text style={{fontSize: 20, marginTop:10}}>
               {!this.state.isTimerStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetTimer}>
            <Text style={{fontSize: 20, marginTop:10}}>RESET</Text>
          </TouchableHighlight>
    
        <Button
          title="Back to home"
          onPress={() =>
            this.startStopTimer && this.props.navigation.navigate('Home') 
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const handleTimerComplete = () => alert("Duration alert");

export default Countpage;