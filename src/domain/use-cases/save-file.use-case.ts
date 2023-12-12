import fs from "fs";

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination?: string;
    fileName: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
    }

    execute({
                fileContent,
                fileDestination = 'outputs',
                fileName = 'table'
            }: SaveFileOptions) {
        try {
            if (!fs.existsSync(fileDestination)) {
                fs.mkdirSync(fileDestination);
            }

            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}