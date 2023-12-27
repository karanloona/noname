import { ObjectId } from "mongodb";
export declare class CreateFolderDTO {
    userId: ObjectId;
    folderName: string;
    files: Array<string>;
}
export declare class UpdateFolderDTO {
    folderId: ObjectId;
    folderName: string;
}
export declare class deleteFileFromFolderDTO {
    folderId: string;
    fileId: string;
}
export declare class fileRequestDTO {
    filename: string;
}
export declare class sendMailDTO {
    filename: string;
    to: string;
}
export declare class contactDTO {
    fullname: string;
    email: string;
    message: string;
    date: string;
    time: string;
}
