import * as childProcess from "child_process";
import * as util from "util";

const exec = util.promisify(childProcess.exec);

export async function findContainerByName(name: string): Promise<boolean> {
    try {
        const result = await exec(`docker ps | grep -i ${name}`);
        return result.stdout.length > 0;
    } catch (error) {
        return false;
    }
}
