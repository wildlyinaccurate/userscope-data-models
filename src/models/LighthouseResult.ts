import { Schema } from "mongoose"

export type LighthouseResult = {
  data: any
}

export const lighthouseResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
