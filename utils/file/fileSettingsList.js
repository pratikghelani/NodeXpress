const fileSettingsList = [
  {
    file_name: "category_image",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/svg+xml", "image/png", "image/jpeg", "image/jpg"],
    file_type_error_message: "Please upload an image file in SVG, PNG, JPEG, or JPG format.",
    file_size: 512000,
    file_size_error_message: "The category image file is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "sub_category_image",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/svg+xml", "image/png", "image/jpeg", "image/jpg"],
    file_type_error_message: "Please upload an image file in SVG, PNG, JPEG, or JPG format.",
    file_size: 512000,
    file_size_error_message: "The subcategory image file is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "third_category_image",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/svg+xml", "image/png", "image/jpeg", "image/jpg"],
    file_type_error_message: "Please upload an image file in SVG, PNG, JPEG, or JPG format.",
    file_size: 512000,
    file_size_error_message: "The third category image file is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "business_logo",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/jpeg", "image/jpg"],
    file_type_error_message: "Please upload an image file in JPEG or JPG format.",
    file_size: 512000,
    file_size_error_message: "The business logo file is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "owner_avatar",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/jpeg", "image/jpg"],
    file_type_error_message: "Please upload an image file in JPEG or JPG format.",
    file_size: 512000,
    file_size_error_message: "The owner avatar file is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "company_logo",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/jpeg", "image/jpg", "image/png"],
    file_type_error_message: "Please upload an image file in JPEG, JPG, or PNG format.",
    file_size: 512000,
    file_size_error_message: "The logo file is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "vendor_support_document",
    file_upload_limit: 1,
    file_upload_limit_error_message: "Sorry, you can only upload one file at a time.",
    file_type: ["image/png", "image/jpeg", "image/jpg", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-word.document.macroEnabled.12", "application/vnd.ms-word.template.macroEnabled.12"],
    file_type_error_message: "Please upload a document in JPEG, JPG, PNG, PDF, or MS Word format.",
    file_size: 1024000,
    file_size_error_message: "The document is too large. Please upload an image file that is under 1 MB in size."
  },
  {
    file_name: "mainProductImage",
    file_upload_limit: 1,
    file_upload_limit_error_messages: "Sorry, you can only upload one file at a time.",
    file_type: ["image/jpeg", "image/jpg", "image/JPEG", "image/JPG"],
    file_type_error_message: "Please upload an image in JPEG or JPG format.",
    file_size: 512000,
    file_size_error_message: "The image is too large. Please upload an image file that is under 500 KB in size."
  },
  {
    file_name: "otherProductImage",
    file_upload_limit: 3,
    file_upload_limit_error_message: "Sorry, you can only upload up to 3 image files OR min 3 image files required.",
    file_type: ["image/jpeg", "image/jpg", "image/JPEG", "image/JPG"],
    file_type_error_message: "Please upload an image in JPEG or JPG format.",
    file_size: 512000,
    file_size_error_message: "The image is too large. Please upload an image file that is under 500 KB in size."
  },
];

module.exports = fileSettingsList;
