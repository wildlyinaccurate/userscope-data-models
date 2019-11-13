import { Schema } from "mongoose"

export type LighthouseResult = {
  data: object
}

export const lighthouseResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
