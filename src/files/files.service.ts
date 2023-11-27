import { Injectable } from "@nestjs/common";
import { CreateFolderDTO, UpdateFolderDTO } from "./files.dto";
import { FilesDao } from "./files.dao";
import { ObjectId } from "mongodb";

@Injectable()
export class FilesService {
    

    constructor(
        private readonly filesDao: FilesDao,
    ) {}
    async createFolder(dto:CreateFolderDTO) {
        dto['userId'] = new ObjectId(dto.userId);
        return await this.filesDao.createFolder(dto);
    }

    async getFoldersByCompanyId(companyId:string){
        return await this.filesDao.getFoldersByCompanyId(new ObjectId(companyId));
    }

    async getFilesByFolderIdAndCompanyId(companyId:string, folderId:string) {
        return await this.filesDao.getFilesByFolderIdAndCompanyId(new ObjectId(companyId), new ObjectId(folderId));
    }

    async uploadFiles(files:any, folderId:any) {
        const res = await this.filesDao.uploadFiles(files);
        
        return await this.filesDao.updateFolderFiles(new ObjectId(folderId), res);
    }

    async getFile(fileKey: string) {
        return await this.filesDao.getFile(fileKey);
    }

    async deleteFolder(id:string) {
        return await this.filesDao.deleteFolder(new ObjectId(id));
    }

    async updateFolder(dto:UpdateFolderDTO) {
        return await this.filesDao.updateFolder(dto);
    }

    async deleteFileFromFolder(folderId:string, file:string) {
        return await this.filesDao.deleteFileFromFolder(new ObjectId(folderId), file);
    }

}