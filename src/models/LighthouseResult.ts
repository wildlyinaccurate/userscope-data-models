import { Document, Schema } from "mongoose"

export type LighthouseResultDocument = Document & {
  data: object
}

export const lighthouseResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
