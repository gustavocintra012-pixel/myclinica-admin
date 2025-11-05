import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { style } from "./style";
import { themas } from "../../global/themes";

import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    height?: number,
    labelStyle?: StyleProp<TextStyle>
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    const {
        IconLeft,
        IconRight,
        IconLeftName,
        IconRightName,
        title,
        onIconLeftPress,
        onIconRightPress,
        height,
        labelStyle,
        ...rest
    } = Props;

    return (
        <Fragment>
            {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}

            <View style={[
                style.BoxInput,
                {
                    height: height || 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                }
            ]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={{ marginRight: 10 }}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} />
                    </TouchableOpacity>
                )}

                <TextInput
                    ref={ref}
                    style={{ flex: 1, height: '100%', color: '#000' }}
                    {...rest}
                />

                {IconRight && IconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={{ marginLeft: 10 }}>
                        <IconRight name={IconRightName as any} size={20} color={themas.colors.gray} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    );
});
