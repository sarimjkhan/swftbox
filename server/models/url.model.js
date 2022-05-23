import mongoose from 'mongoose';

const UrlSchema = mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    bigUrl: {
      type: String,
      required: true,
    },
    expiry: {
      type: Date,
      default: () => {
        const currentDate = new Date();
        return new Date(currentDate.setMonth(currentDate.getMonth() + 6)); //Default expiry 6 months
      },
    },
    visits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model('Url', UrlSchema);
export default Url;
