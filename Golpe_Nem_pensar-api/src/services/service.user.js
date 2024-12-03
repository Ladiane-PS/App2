//tratativa da senha 
import bcrypt from "bcrypt";
import repositorUser from "../repositories/repository.user.js";

async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repositorUser.Inserir(name, email, hashPassword);

    return user;
}

export default { Inserir }
