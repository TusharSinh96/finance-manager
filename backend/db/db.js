const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Database Connected Successfully');
    } catch (error) {
        console.error('❌ DB Connection Error:', error.message);
        process.exit(1); // Exit if connection fails
    }
};

module.exports = { db };
