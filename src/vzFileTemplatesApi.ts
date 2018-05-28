'use strict';

import { ProjectItemTemplateManager } from "./templates/projectItemTemplateManager";

export class VzFileTemplatesApi implements vzFileTemplates.IVZFileTemplatesApi {
    protected _templateManager : ProjectItemTemplateManager;

    constructor(newTemplateManager : ProjectItemTemplateManager) {
        this._templateManager = newTemplateManager;
    }

    registerTemplatesFolder(folderPath : string) : void {
        this._templateManager.registerTemplatesFolder(folderPath);
    }

    registerWizard(wizard : vzFileTemplates.IProjectItemWizard) : void {
        this._templateManager.registerWizard(wizard);
    }

}