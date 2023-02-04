import mongoose from "mongoose";

// create student schema
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    sur_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      default: "",
    },
    secondary_name: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Custom"],
    },
    gender_custom: {
      type: String,
      trim: true,
      default: null,
    },
    gender_pronoun: {
      type: String,
      trim: true,
      default: null,
    },
    birth_day: {
      type: String,
      trim: true,
      required: true,
    },
    birth_month: {
      type: String,
      trim: true,
      required: true,
    },
    birth_year: {
      type: String,
      trim: true,
      required: true,
    },
    profile_photo: {
      type: String,
      default: null,
    },
    cover_photo: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      default: null,
    },
    work: {
      type: Array,
      default: [],
    },
    edu: {
      type: Array,
      default: [],
    },
    current_city: {
      type: Array,
      default: [],
    },
    living: {
      type: String,
    },
    home_town: {
      type: String,
    },
    relationship: {
      type: String,
    },
    family_members: {
      type: Array,
      default: [],
    },
    about_you: {
      type: String,
    },
    favorite_quotes: {
      type: String,
    },
    blood_donations: {
      type: String,
    },
    name_pronunciation: {
      type: Array,
      default: [],
    },
    others_name: {
      type: Array,
      default: [],
    },
    life_event: {
      type: Array,
      default: [],
    },
    joined: {
      type: Date,
    },
    web_site: {
      type: Array,
      default: [],
    },
    social: {
      type: Array,
      default: [],
    },
    language: {
      type: Array,
      default: [],
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    request: {
      type: Array,
      default: [],
    },
    block: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    privacyLegal_info: {
      type: String,
    },
    impressum: {
      type: String,
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    access_token: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);
