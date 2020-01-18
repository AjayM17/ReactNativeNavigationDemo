import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StatusBar,
} from 'react-native';


class ProfileScreen extends React.Component {
    constructor(props){
    super(props)
    console.log(this.props)
    }
    render() {
        const {navigate , state} = this.props.navigation;
        console.log(navigate.state)
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
      <Text>{state.params.name}
        
      </Text>
                </SafeAreaView>
            </>
        )

    }
}


export default ProfileScreen