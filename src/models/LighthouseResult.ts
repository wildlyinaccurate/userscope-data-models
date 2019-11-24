import { Schema } from "mongoose"

export type LighthouseResult = {
  data: any
  createdAt: Date
  modifiedAt: Date
}

export const lighthouseResultSchema = new Schema(
  {
    data: Schema.Types.Mixed
  },
  { timestamps: true }
)
