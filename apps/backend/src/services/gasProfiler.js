import parser from "solidity-parser-antlr";

export function analyzeContract(code) {
    try {

        const ast = parser.parse(code);

        let contractName = "";
        let functions = [];

        parser.visit(ast, {

            ContractDefinition(node) {
                contractName = node.name;
            },

            FunctionDefinition(node) {

                if(node.name){

                    functions.push({
                        name: node.name,
                        visibility: node.visibility,
                        gasEstimate: 50000
                    });

                }

            }

        });

        return {
            success: true,
            contract: contractName,
            functions
        };

    } catch(error){

        return {
            success:false,
            error:error.message
        };

    }
}