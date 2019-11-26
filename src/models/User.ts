import bcrypt from "bcrypt-nodejs"
import crypto from "crypto"
import { Document, Error, Schema } from "mongoose"
import { TeamDocument } from "./Team"

export type UserDocument = Document & {
  team: TeamDocument
  email: string
  password: string
  passwordResetToken: string
  passwordResetExpires: string

  profile: {
    name: string
    picture: string
  }

  isAdmin: boolean

  displayName: () => string
  comparePassword: comparePasswordFunction
  gravatar: (size: number) => string
}

export interface AuthToken {
  accessToken: string
  kind: string
}

export const userSchema = new Schema(
  {
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team"
    },

    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: String,

    profile: {
      name: String,
      picture: String
    },

    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

/**
 * Password hash middleware.
 */
userSchema.pre("save", function save(next) {
  const user = this as UserDocument
  if (!user.isModified("password")) {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, undefined, (err: Error, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.displayName = function() {
  return this.profile.name || this.email || this.id
}

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void

const comparePassword: comparePasswordFunction = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
    cb(err, isMatch)
  })
}

userSchema.methods.comparePassword = comparePassword

userSchema.methods.gravatar = function(size: number = 200) {
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`
  }
  const md5 = crypto
    .createHash("md5")
    .update(this.email)
    .digest("hex")

  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`
}
