import { Schema } from "mongoose";

const debitoSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME do débito é obrigatório!"]
        },
        valor: {
            type: Number,
            required: [true, "O campo VALOR do débito é obrigatório!"],
            min: [1, "Valor mínimo de R$1,00"]
        },
        status: {
            type: String,
            enum: ["PAGO","AGENDADO","PENDENTE"],  //enum valida se a mensagem passada é uma das opções do array
            uppercase: true  // converte pra maiúscula
        }
    },
    {
        timestamps: true,
    }
);

export { debitoSchema };