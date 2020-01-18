import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Button
} from 'react-native';


class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <Button
        title="Go to Jane's profile"
        
        onPress={() => 
           navigate('Profile', {name: 'Jane'})
         // navigate('Profile')
        }
      />
                </SafeAreaView>
            </>
        )

    }
}


export default HomeScreen