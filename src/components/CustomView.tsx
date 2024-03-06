import React, { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native'
import { styles as stylesConfig } from '../config';
interface Props extends PropsWithChildren {
    styles?: StyleProp<ViewStyle>;
}
export const CustomView = ({ children, styles }: Props) => {
    return (
        <View style={[stylesConfig.container, styles]}>
            {children}
        </View>
    )
}   