import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native'
import { CustomView } from '../../../components/CustomView';
import { styles } from '../../../config';
import { useCounterStore } from '../../store';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
    const count = useCounterStore(state => state.count);
    const increment = useCounterStore(state => state.increment);
    const decrement = useCounterStore(state => state.decrement);
    const reset = useCounterStore(state => state.reset);


    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: `Contador ${count}`
        })

    }, [count])

    return (
        <CustomView>            
            <Pressable style={styles.primaryButton} >
                <Text style={{ color: 'white' }} onPress={increment}>Incrementar</Text>
            </Pressable>
            <Pressable style={styles.primaryButton} onPress={decrement}>
                <Text style={{ color: 'white' }}>Decrementar</Text>
            </Pressable>
            <Pressable style={styles.primaryButton} onPress={reset} >
                <Text style={{ color: 'white' }}>Reset</Text>
            </Pressable>
        </CustomView>
    )
}