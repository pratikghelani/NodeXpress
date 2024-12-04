const { response } = require("express");
const ApiMessage = require("../ApiMessage");
const fileSettingsList = require("./fileSettingsList");

const fileValidate = async (fileName, files) => {
    try {
        const file = files.find(file => file.name === fileName);

        if (!file && !fileName) {
            return {
                status: false,
                message: ApiMessage.BAD_REQUEST
            }
        }

        const filterSettings = fileSettingsList.find(setting => setting.file_name === fileName);
        if (filterSettings) {

            const fileType = await validateFileType(filterSettings.file_type, files);
            if (!fileType) {
                return {
                    status: false,
                    message: filterSettings.file_type_error_message
                }
            }

            const fileSize = await validateSizeType(filterSettings.file_size, files);

            if (!fileSize) {
                return {
                    status: false,
                    message: filterSettings.file_size_error_message
                }
            }

            const fileCountResult = await filesCount(filterSettings.file_upload_limit, files);
            if (!fileCountResult) {
                return {
                    status: false,
                    message: filterSettings.file_upload_limit_error_message
                }
            }


            return {
                status: true,
                message: ApiMessage.SUCCESS,
                files: files
            }

        } else {
            return {
                status: false,
                message: ApiMessage.notFound("Category validation")
            }
        }


    } catch (e) {
        console.log(e.message);
        return {
            status: false,
            message: ApiMessage.SERVER_ERROR
        }
    }
}

const validateFileType = (mimeType, files) => {
    let counter = 0;
    for (const item of files) {
        if (mimeType.includes(item.mimetype)) {
            counter += 1;
            if (counter === files.length) {
                return true;
            }
        } else {
            return false;
        }
    }
}

const validateSizeType = (acceptableSize, files) => {
    let counter = 0;
    for (const item of files) {
        if (item.size < acceptableSize) {
            counter += 1;
            if (counter === files.length) {
                return true;
            }
        } else {
            return false;
        }
    }
}

const filesCount = (count, files) => {
    if (count == files.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = fileValidate;