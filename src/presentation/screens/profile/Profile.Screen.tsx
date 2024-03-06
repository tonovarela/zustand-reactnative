import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native'
import { CustomView } from '../../../components/CustomView';
import { styles } from '../../../config/app-theme';
import { useCounterStore, useProfileStore } from '../../store';


export const ProfileScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const counter = useCounterStore(state => state.count);

   
    return (
        <CustomView>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
            <Text style={styles.title}>Counter {counter}</Text>

            <Pressable style={styles.primaryButton} onPress={()=>{useProfileStore.setState({name:'Marco'})}}>
                <Text style={{color:'white'}}>Cambiar nombre</Text>
            </Pressable>
        </CustomView>
    )
}