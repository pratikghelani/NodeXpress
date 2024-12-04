const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const crypto = require('node:crypto');
async function uploadFileToS3(folder, files) {

  const s3Client = new S3Client({
    region: process.env.DO_SPACES_REGION,
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY,
      secretAccessKey: process.env.DO_SPACES_SECRET,
    },
  });
  const uploadedUrls = [];
  for (const file of files) {
    const filename = `${crypto.randomBytes(5).toString('hex')}_${file.originalname}`;
    const params = {
      Bucket: process.env.DO_SPACES_AWS_BUCKET,
      Key: `${folder}/${filename}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    await s3Client.send(new PutObjectCommand(params));
    uploadedUrls.push(`${process.env.DO_SPACES_ENDPOINT}/${folder}/${filename}`);
  }

  return uploadedUrls;
}

module.exports = { uploadFileToS3 };
