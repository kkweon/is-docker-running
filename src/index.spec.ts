import { findContainerByName } from "./index";
import { expect } from "chai";
import * as childProcess from "child_process";
import * as util from "util";

const exec = util.promisify(childProcess.exec);

describe("findContainerByName", function() {
    const containerName = "docker-test-postgres";
    before(async function() {
        const result = await exec(`docker run -d --name ${containerName} postgres:latest`);
        if (result.stderr) throw "Failed to run docker container";
    });

    after(async function() {
        const result = await exec(`docker rm -f ${containerName}`);
        if (result.stderr) throw "Failed to run docker container";
    });

    it("returns false when container is not found", async function() {
        const result = await findContainerByName("no-container");
        expect(result).to.be.false;
    });

    it("returns true when container is found", async function() {
        const result = await findContainerByName(containerName);
        expect(result).to.be.true;
    });
});
