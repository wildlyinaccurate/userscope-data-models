import { Schema } from "mongoose"

export type BbcA11yResult = {
  data: any
}

export const bbcA11yResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
