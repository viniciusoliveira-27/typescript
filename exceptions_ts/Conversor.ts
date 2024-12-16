try {
    const resultado = converte("true");

    console.log(resultado);
} catch (error: any) {
    if (error instanceof TypeError)
        console.error("\n Voce digitou um valor que náo é do tipo String")
    else
        console.error("\n Erro inesperado!", error.message);
} finally {
    console.log("\n programa finalizado!")
}


export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}