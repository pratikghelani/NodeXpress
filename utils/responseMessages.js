const responseMessages = {
    // Success Messages
    SUCCESS: "Success.",
    LOGGED_IN: "Logged in successfully.",
    EMAIL_VERIFIED: "Email verified successfully.",
    OTP_SENT_EMAIL: "OTP sent to your email. Please check your inbox.",
    OTP_SENT_MOBILE: "OTP sent to your mobile number.",
    PASSWORD_UPDATED: "Your password has been successfully updated.",
    ACCOUNT_VERIFIED: "Congratulations! Your account has been successfully verified.",
    USER_UNBLOCKED: "User unblocked successfully.",

    // Error Messages
    DATA_NOT_FOUND: "Data not found.",
    SERVER_ERROR: "Something went wrong. Please try again later.",
    INVALID_DATA: "Invalid data provided.",
    UNAUTHORIZED: "Unauthorized access.",
    PASSWORD_MISMATCH: "Password mismatch. Please try again.",
    ACCOUNT_NOT_FOUND: "Account not found.",
    EMAIL_ALREADY_EXISTS: "You already have an account. Please login.",
    ACCOUNT_ALREADY_VERIFIED: "Your account is already verified.",
    INVALID_EMAIL_PASSWORD: "Invalid email or password. Please try again.",
    INVALID_TOKEN: "Invalid or expired token.",
    USER_BLOCKED: "Your account has been blocked. Please contact the administrator.",
    BUSINESS_INACTIVE: "This business is currently inactive.",
    NO_ACTIVE_PLAN: "No active subscription found. Please purchase a plan.",

    // Validation Messages
    PASSWORD_VALIDATION: "Password must be 8-16 characters, with at least one digit and one special character.",
    EMAIL_VALIDATION: "Please enter a valid email address.",
    MOBILE_VALIDATION: "Please enter a valid mobile number.",
    SAME_PASSWORD: "The old and new passwords cannot be the same.",

    // File Handling
    INVALID_FILE_TYPE: "Invalid file type. Only JPG, JPEG, and PNG files are allowed.",
    INVALID_DOCUMENT_TYPE: "Invalid file type. Only JPG, JPEG, PNG, PDF, or MS Word files are allowed.",
    INVALID_SVG_TYPE: "Invalid file type. Only SVG files are allowed.",
    INVALID_FILE_SIZE: "File size exceeds the limit. Only files up to 512 KB are allowed.",

    // Dynamic Messages
    createMessage: (item = "Data") => `${item} created successfully.`,
    updateMessage: (item = "Data") => `${item} updated successfully.`,
    deleteMessage: (item = "Data") => `${item} deleted successfully.`,
    alreadyExist: (item = "Data") => `${item} already exists.`,
    invalidItem: (item = "Data") => `Invalid ${item}.`,
    notFound: (item = "Data") => `${item} not found.`,
    required: (item = "Data") => `${item} is required.`,
    fileUploadLimit: (item = "") => `Only ${item || "limited"} files can be uploaded here.`,
    enterValid: (item = "Data") => `Please enter a valid ${item}.`,
    custom: (message) => message,
};

module.exports = responseMessages;
