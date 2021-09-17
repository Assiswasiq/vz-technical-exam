import fs from 'fs';
import util from 'util';
import path from 'path';

class FileHandler {

    constructor() {
        this.readFileFs = util.promisify(fs.readFile);
        this.writeFileFs = util.promisify(fs.writeFile);
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    async readFile(dirname, destination) {
        console.log(dirname, destination)
        return JSON.parse(await this.readFileFs(path.join(dirname, destination), "utf-8"))
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    async writeFile(dirname, destination, data) {
        return this.writeFileFs(path.join(dirname, destination), JSON.stringify(data))
    }

}

module.exports = FileHandler;