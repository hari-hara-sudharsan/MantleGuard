// src/services/gasProfiler.js
import parser from "solidity-parser-antlr";

function generateSuggestions(gasEstimate) {
    const suggestions = [];

    if (gasEstimate > 80000) {
        suggestions.push("Consider using calldata instead of memory");
        suggestions.push("Pack storage variables tightly");
    }
    if (gasEstimate > 60000) {
        suggestions.push("Reduce storage writes in loops");
        suggestions.push("Use immutable or constant where possible");
    }
    if (gasEstimate > 40000) {
        suggestions.push("Optimize event emission");
        suggestions.push("Batch operations if possible");
    }

    // Default suggestion
    if (suggestions.length === 0) {
        suggestions.push("Gas usage looks optimized");
    }

    return suggestions;
}

export function analyzeContract(code) {
    try {
        const ast = parser.parse(code);

        let contractName = "Unknown";
        let functions = [];

        parser.visit(ast, {
            ContractDefinition(node) {
                contractName = node.name;
            },

            FunctionDefinition(node) {
                if (node.name && node.name !== "") {
                    const gasEstimate = 30000 + Math.floor(Math.random() * 50000);

                    const l2Fee = Math.floor(gasEstimate * 0.02);   // Example L2 fee
                    const daFee = Math.floor(gasEstimate * 0.005);  // Example Data Availability fee
                    const totalFee = l2Fee + daFee;

                    functions.push({
                        name: node.name,
                        visibility: node.visibility || "public",
                        gasEstimate: gasEstimate,
                        l2Fee: l2Fee,
                        daFee: daFee,
                        totalFee: totalFee,
                        suggestions: generateSuggestions(gasEstimate)
                    });
                }
            }
        });

        return {
            success: true,
            contract: contractName,
            functions
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}