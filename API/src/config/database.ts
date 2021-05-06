import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://topicos:especiais@cluster0.finem.mongodb.net/Cluster0?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() =>{
        console.log("Aplicação conectada ao banco de dados");
    }).
    catch((erro) =>{
        console.log(`Erro ao conectar com o banco de dados: ${erro}`);
    });

export { mongoose }; 