const mongoose = require("mongoose");

// this schema is for packages and price
//e.g "packageName": packageAmount
const DStvpackageSchema = new mongoose.Schema(
    {
        premiumAsia:{
            type: Number,
            required: true
        },
        premium:{
            type: Number,
            required: true
        },
        compactPlus:{
            type: Number,
            required: true
        },
        compact:{
            type: Number,
            required: true
        },
        confam:{
            type: Number,
            required: true
        },
        yanga:{
            type: Number,
            required: true
        },
        padi:{
            type: Number,
            required: true
        },
        asian:{
            type: Number,
            required: true
        }

    }
)

const GOtvpackageSchema = new mongoose.Schema(
    {
        supaPlus:{
            type: Number,
            required: true
        },
        supa:{
            type: Number,
            required: true
        },
        max:{
            type: Number,
            required: true
        },
        jolli:{
            type: Number,
            required: true
        },
        jinja:{
            type: Number,
            required: true
        },
        smallie:{
            type: Number,
            required: true
        }
    }
)


/*this schema is for decoder type which contains a package schema
 e.g "decoderType": {
                        "packageName": packageAmount,
                        "packageName": pakageAmount
                    } */ 
const dstvgotvSchema = new mongoose.Schema(
    {
        dstv: {
            type: DStvpackageSchema,
            required: true
        },

        gotv:{
            type: GOtvpackageSchema,
            required: true
        },

        extraView:{
            type: Number,
            required: true
        }
    }
)

/* this schema is for decoder type containing decoder details 
such as 
 {
    "decoderType": {
                    "packageName":
                },
                
    "decoderType": {
                        "packageName": packageAmount,
                        "packageName": pakageAmount
                    } 
                    */
const decoderTypeSchema = new mongoose.Schema(
    {
        decoderType: {
            type: dstvgotvSchema,
            require: [true, "decoder type is required"]
        }
    },

{
    timestamps: true
}
)

const DStvGOtvSubscription = mongoose.model('DStvGOtvSubscription', decoderTypeSchema);

module.exports = DStvGOtvSubscription


