import { exec } from "child_process";

export function runSlither(filePath) {

    return new Promise((resolve, reject) => {

        exec(
            `slither ${filePath} --json -`,
            (error, stdout) => {

                if (error) {
                    reject(error);
                    return;
                }

                resolve(stdout);

            }
        );

    });

}