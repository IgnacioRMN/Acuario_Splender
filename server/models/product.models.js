const mongoose = require(`mongoose`);
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },

  precio: { type: Number, default: 0 },
  descripcion: { type: String },
  img: { type: String },

  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model(`product`, productSchema);
