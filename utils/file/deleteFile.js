const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const deleteFile = (folder, url) => {
  return new Promise((resolve, reject) => {
    if (folder && url) {
      const s3Client = new S3Client({
        region: process.env.DO_SPACES_REGION, // Update with your AWS region
        credentials: {
          accessKeyId: process.env.DO_SPACES_KEY,
          secretAccessKey: process.env.DO_SPACES_SECRET
        }
      });

      const parts = url.split("/");
      const filename = parts[parts.length - 1];

      const params = {
        Bucket: process.env.DO_SPACES_AWS_BUCKET,
        Key: `${folder}/${filename}` // Update with the correct path format
      };

      const command = new DeleteObjectCommand(params);

      s3Client.send(command)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          console.error(err.message);
          reject(err);
        });
    } else {
      reject(new Error("Folder name and URL required"));
    }
  });
};

module.exports = {
  deleteFile,
};
