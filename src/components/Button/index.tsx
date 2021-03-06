import React from "react";
import { View, Text, TouchableOpacity, ColorValue, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { COLORS } from "../../theme";

type Props = TouchableOpacityProps & {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading: boolean;
}

export function Button({ title, color, backgroundColor, icon, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity disabled={isLoading} style={[styles.container, { backgroundColor }]} {...rest}>
            {
                isLoading ?
                    (<ActivityIndicator color={COLORS.BLACK_PRIMARY} />)
                    :
                    <>
                        <AntDesign name={icon} size={24} color={COLORS.BLACK_PRIMARY} style={styles.icon} />
                        <Text style={[styles.title, { color }]}>{title}</Text>
                    </>
            }
        </TouchableOpacity>
    );
}