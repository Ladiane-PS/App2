import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./materiais.style.js"; // Corrigi o caminho para garantir que o estilo certo seja importado.

function Materiais({ title, icon }) {
    return (
        <TouchableOpacity style={styles.materiais}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Materiais;
