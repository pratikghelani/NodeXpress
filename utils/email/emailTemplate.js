const sendOTPEmail = (userName, otp) => {
    return {
        subject: "Your OTP Code",
        body: `Dear ${userName},<br><br>Your OTP code is: <strong>${otp}</strong>.<br><br>Please use this code to complete your verification.<br><br>Thank you!<br>Best regards,<br>Your Company Team`
    };
};

const passwordResetEmail = (userName, otp) => {
    return {
        subject: "Password Reset Request",
        body: `Hi ${userName},<br><br>You requested to reset your password.<br>Your reset code is: <strong>${otp}</strong>.<br><br>Please use this code to reset your password.<br>If you didn't request a password reset, please ignore this email.<br><br>Thank you!<br>Your Company Team`
    };
};

const welcomeEmail = (userName) => {
    return {
        subject: "Welcome to Our Service!",
        body: `Dear ${userName},<br><br>Welcome to Our Service! We're excited to have you on board.<br>Start exploring and enjoy the benefits.<br><br>Thank you for joining us!<br>Your Company Team`
    };
};

const accountActivationEmail = (userName) => {
    return {
        subject: "Account Activation Successful",
        body: `Hello ${userName},<br><br>Your account has been successfully activated.<br>You can now log in and start using our services.<br><br>Thank you!<br>Your Company Team`
    };
};

const paymentConfirmationEmail = (userName, amount) => {
    return {
        subject: "Payment Confirmation",
        body: `Dear ${userName},<br><br>We have received your payment of <strong>$${amount}</strong>.<br>Thank you for your payment!<br><br>Best regards,<br>Your Company Team`
    };
};

const subscriptionRenewalReminderEmail = (userName, daysLeft) => {
    return {
        subject: "Subscription Renewal Reminder",
        body: `Hi ${userName},<br><br>Your subscription will expire in <strong>${daysLeft} days</strong>.<br>Please renew your subscription to continue enjoying uninterrupted services.<br><br>Thank you!<br>Your Company Team`
    };
};

const orderConfirmationEmail = (userName, orderId) => {
    return {
        subject: "Order Confirmation",
        body: `Hi ${userName},<br><br>Your order <strong>#${orderId}</strong> has been confirmed.<br>We will notify you when it’s shipped.<br><br>Thank you for shopping with us!<br>Your Company Team`
    };
};

const orderShippedEmail = (userName, orderId) => {
    return {
        subject: "Order Shipped",
        body: `Dear ${userName},<br><br>Your order <strong>#${orderId}</strong> has been shipped.<br>You can track your order using our tracking system.<br><br>Thank you for your purchase!<br>Your Company Team`
    };
};

const feedbackRequestEmail = (userName) => {
    return {
        subject: "We Value Your Feedback",
        body: `Hi ${userName},<br><br>We would love to hear about your experience!<br>Please take a moment to share your feedback.<br><br>Thank you for helping us improve!<br>Your Company Team`
    };
};

module.exports = {
    sendOTPEmail,
    passwordResetEmail,
    welcomeEmail,
    accountActivationEmail,
    paymentConfirmationEmail,
    subscriptionRenewalReminderEmail,
    orderConfirmationEmail,
    orderShippedEmail,
    feedbackRequestEmail
};
