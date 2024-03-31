import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/error.js';

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("Please fill entire form", 400));
    }
  
    // Create the message
    await Message.create({ firstName, lastName, email, phone, message });

    // Send a success response
    res.status(200).json({
        success: true,
        message: "Message sent successfully",
        // Optionally, send the created message data
    });
});

