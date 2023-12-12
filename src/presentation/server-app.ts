import {CreateTable} from "../domain/use-cases/create-table.use-case";
import {SaveFile} from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    name: string;
    destination: string;
}

export class ServerApp {
    static run({base, show, limit, name, destination}: RunOptions) {
        console.log('ServerApp.run');
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({fileContent: table, fileName: name, fileDestination: destination});
        if (show) {
            console.log(table);
        }
        console.log(wasCreated ? 'file created' : 'file not created');
    }
}