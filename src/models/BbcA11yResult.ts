import { Document, Schema } from "mongoose"

export type BbcA11yResultDocument = Document & {
  data: object
}

export const bbcA11yResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
