import GetRequest from "../dtos/get.request";
import IdadeHelper from "./idade.helper";

export default class BemvindoHelper {
    static criarMensagem(input: GetRequest): string {
        let mensagem = `Bem-vindo`;
        if (input.nome) {
            mensagem += ` ${input.nome}`;
        }else {
            mensagem += ` visitante`;
        }

        if (input.idade) {
            const ehAdulto = IdadeHelper.ehAdulto(input.idade);
            if (ehAdulto) {
                mensagem += `, você é maior de idade`;
            } else {
                mensagem += `, você é menor de idade`;
            }
        } else {
            mensagem += `, sua idade não foi informada`;
        }
        return mensagem + `!`;
    }

}