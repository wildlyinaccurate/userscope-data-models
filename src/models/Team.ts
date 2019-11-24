import { Document, Schema } from "mongoose"

export type TeamDocument = Document & {
  name: string
  createdAt: Date
  modifiedAt: Date
}

export const teamSchema = new Schema(
  {
    name: String
  },
  { timestamps: true }
)
