import mongoose from "mongoose";

const MessageSchema = new mongoose.MessageSchema(
    {
        chatIn: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", index: true },
        senderIn: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: String,
        readBy: [
            { userId: mongoose.Schema.Types.ObjectId },
            { readAt: Date }
        ],
    }
)
MessageSchema.index({ chatId: 1, createdAt: -1 })

export const Message =
    mongoose.models.Message || mongoose.model("Message", MessageSchema)