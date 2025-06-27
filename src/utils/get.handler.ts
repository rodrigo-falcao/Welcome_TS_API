import GetRequest from "../dtos/get.request";
import GetResponse from "../dtos/get.response";
import BemvindoHelper from "../helpers/bemVindo.helper";

export default class GetHandler {
    static buildResponse (input: GetRequest): GetResponse {
        const response: GetResponse = {
            mensagem: BemvindoHelper.criarMensagem(input),
        };
        return response;
    }
}