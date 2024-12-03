import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import {styles} from "./login.style.js";
import Button from "../../components/button/button.jsx";

function Login() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
              <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>  
{/* Quando secureTextEntry é definido como true, o campo de entrada oculta o texto digitado, substituindo-o por pontos ou bolinhas, garantindo que a senha não seja visível enquanto o usuário a digita. */}
            <View style={styles.containerInput}> 
                 <TextInput placeholder="Senha" 
                      style={styles.input}
                      secureTextEntry={true}/> 
                                  </View>
            
            <Button  text="Acessar"/>
        </View>

        <View style={styles.footer} >
            <Text style={styles.footer}>Não tenho conta. </Text>
            <TouchableOpacity >
                  <Text style={styles.footerLink}>Criar conta agora.</Text>
            </TouchableOpacity>
        </View> 

    </View>

}

export default Login;
//secureTextEntry={true} oculta o texto digitado, substituindo-o por pontos ou bolinhas