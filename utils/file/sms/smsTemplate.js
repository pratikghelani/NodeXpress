const sendOTP = (userName, otp) => {
    return `Dear ${userName},\n\nYour OTP code is: ${otp}\n\nPlease use this code to complete your verification.\n\nThank you!`;
};

const passwordResetOTP = (otp) => {
    return `Your password reset code is: ${otp}.\n\nPlease use this code to reset your password.\n\nThank you!`;
};

const welcomeMessage = (userName) => {
    return `Welcome, ${userName}!\n\nThank you for joining us. We're excited to have you on board.\n\nExplore our services and enjoy the benefits!`;
};

const accountActivated = (userName) => {
    return `Hello ${userName},\n\nYour account has been successfully activated.\n\nYou can now log in and start using our services.\n\nThank you!`;
};

const paymentConfirmation = (userName, amount) => {
    return `Dear ${userName},\n\nYour payment of $${amount} has been received successfully.\n\nThank you for your payment!`;
};

const paymentFailure = (userName) => {
    return `Dear ${userName},\n\nYour recent payment attempt failed.\n\nPlease check your payment method or try again later.`;
};

const subscriptionRenewalReminder = (userName, daysLeft) => {
    return `Hi ${userName},\n\nYour subscription will expire in ${daysLeft} days.\n\nPlease renew it to continue enjoying uninterrupted services.`;
};

const accountBlocked = (userName) => {
    return `Dear ${userName},\n\nYour account has been temporarily blocked due to security concerns.\n\nPlease contact support for assistance.`;
};

const eventReminder = (eventName, date) => {
    return `Reminder:\n\nDon't miss the "${eventName}" event on ${date}.\n\nWe look forward to seeing you there!`;
};

const orderConfirmation = (orderId, userName) => {
    return `Hi ${userName},\n\nYour order #${orderId} has been confirmed.\n\nWe will notify you when it’s shipped. Thank you for shopping with us!`;
};

const orderShipped = (orderId, userName) => {
    return `Dear ${userName},\n\nYour order #${orderId} has been shipped.\n\nTrack your order status online for real-time updates.`;
};

const appointmentReminder = (userName, date, time) => {
    return `Hi ${userName},\n\nThis is a reminder for your appointment on ${date} at ${time}.\n\nPlease arrive on time.`;
};

const promotionalOffer = (userName, offerDetails) => {
    return `Hi ${userName},\n\nSpecial Offer: ${offerDetails}\n\nDon't miss out! Offer valid for a limited time only.`;
};

const lowBalanceAlert = (userName, balance) => {
    return `Alert: ${userName},\n\nYour account balance is low ($${balance}).\n\nPlease recharge soon to avoid service interruption.`;
};

const feedbackRequest = (userName) => {
    return `Hi ${userName},\n\nWe value your feedback!\n\nPlease take a moment to share your experience with us. Thank you!`;
};

module.exports = {
    sendOTP,
    passwordResetOTP,
    welcomeMessage,
    accountActivated,
    paymentConfirmation,
    paymentFailure,
    subscriptionRenewalReminder,
    accountBlocked,
    eventReminder,
    orderConfirmation,
    orderShipped,
    appointmentReminder,
    promotionalOffer,
    lowBalanceAlert,
    feedbackRequest,
};
