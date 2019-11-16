import { Document, Schema } from "mongoose"
import { TeamDocument } from "./Team"
import { BbcA11yResult, bbcA11yResultSchema } from "./BbcA11yResult"
import { LighthouseResult, lighthouseResultSchema } from "./LighthouseResult"

export type TestResultDocument = Document & {
  url: string
  team: TeamDocument
  bbcA11yResults: BbcA11yResult
  lighthouseResults: LighthouseResult
}

export const testResultSchema = new Schema(
  {
    url: String,
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team"
    },
    bbcA11yResults: bbcA11yResultSchema,
    lighthouseResults: lighthouseResultSchema
  },
  { timestamps: true }
)
