import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './style';
import { theme } from '@/src/theme';

function Input({children}: {children: ReactNode}) {
    return (
        <View style={styles.input}>{children}</View>
    )
}

function Field({...rest}: TextInputProps){
    return(
        <TextInput style={styles.field}
            {...rest}        
        />
    )
}

Input.Field = Field

export {Input}