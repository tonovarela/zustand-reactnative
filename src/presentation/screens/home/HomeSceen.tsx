import React, { useState } from 'react';
import { Button, Pressable, Text } from 'react-native'
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { CustomView } from '../../../components/CustomView';
import { useCounterStore, useProfileStore } from '../../store';
import { styles } from '../../../config';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export const HomeScreen = () => {
    const [date, setDate] = useState(new Date());
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const counter = useCounterStore(state => state.count);
    const changeProfile = useProfileStore(state => state.changeProfile);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate;
        console.log(currentDate);
        setDate(currentDate!);
    };

    const showMode = (currentMode: string) => {
        DateTimePickerAndroid.open({
            value: date,
            mode: 'date',
            onChange,

            is24Hour: true,
        });
    };
    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <CustomView>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
            <Text style={styles.title}>Counter {counter}</Text>
            <Pressable style={styles.primaryButton} onPress={() => { changeProfile('Vare', 't@live.com') }}>
                <Text style={{ color: 'white' }}>Cambiar email</Text>
            </Pressable>


            <Button onPress={showDatepicker} title="Show date picker!" />


            {/* <RNDateTimePicker
            locale="es-ES" 
                testID="dateTimePicker"                
                maximumDate={new Date(2024,6,3)}
                value={date}
                mode={'date'}
                is24Hour={true}
                 onChange={onChange}
            /> */}
        </CustomView>
    )
}