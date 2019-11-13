import { Document, Schema } from "mongoose"

export type TeamDocument = Document & {
  name: string
}

export const teamSchema = new Schema(
  {
    name: String
  },
  { timestamps: true }
)
