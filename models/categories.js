import { Schema, model } from "mongoose";

// ======================
// CATEGORIES SCHEMA
// ======================

const CategoriesSchema = new Schema(
    {       
        parent_id: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            default: null,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const Category = model('Category', CategoriesSchema);

export default Category;
