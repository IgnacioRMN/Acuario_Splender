const mongoose = requiere(`mongoose`);

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
  fechaRegistro: { type: Date, default: Date.now },

  categoria: { type: Schema.Types.ObjectId, ref: "Categoria", required: true },
});

module.exports = mongoose.model(`product`, productSchema);
