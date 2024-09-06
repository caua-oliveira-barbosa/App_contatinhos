import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { Avatar } from "../avatar"

export type ContatcProps = {
    name: string
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContatcProps
}

export function Contatc({ contact, ...rest } : Props) {
    return <TouchableOpacity style={styles.container}
    >
        <Avatar name="Pedroso" image={require("@/assets/avatar.jpeg")}/>
        <Text style={styles.name}>Pedroso</Text>        
    </TouchableOpacity>
}