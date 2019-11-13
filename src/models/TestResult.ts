import { Document, Schema } from "mongoose"
import { TeamDocument } from "./Team"
import { BbcA11yResultDocument, bbcA11yResultSchema } from "./BbcA11yResult"
import { LighthouseResultDocument, lighthouseResultSchema } from "./LighthouseResult"

export type TestResultDocument = Document & {
  url: string
  team: TeamDocument
  blah: string
  bbcA11yResults: BbcA11yResultDocument
  lighthouseResults: LighthouseResultDocument
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
