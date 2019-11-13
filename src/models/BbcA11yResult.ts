import { Schema } from "mongoose"

export type BbcA11yResult = {
  data: object
}

export const bbcA11yResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
