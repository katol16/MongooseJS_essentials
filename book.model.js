'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	titile: String,
	published: {
		type: Date,
		default: Date.now
	},
	keywords: Array,
	published:Boolean,
	author: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	// Embedded sub-document
	detail: {
		modelNumber: Number,
		hardcover: Boolean,
		reviews: Number,
		rank: Number
	}
})

module.exports =  mongoose.model('Book', BookScehma);

// 'Book' to nazwa modelu
// Warto zaznaczyć, że w BookSchmea możemy zapisać tytuł w dwóch sposbach
// I sposób
	// title: String
// II sposób
	// title: {
	// 	type: String,
	// 	required: true, // defaultowo ustaiwone na false
	// 	unique: true // defaultowo ustaiwone na false, przydaje sie jesli chcemy meic pewnosc, że wartosc jest unikalna, np. dobre do emaila
	// }

// W drugim spsobie, mozemy dodawać inne opcję np. default: "chuj", czyli defaultowo bedzie ustawiony string "chuj"

// WAŻNE!
	// author: {
	// 	type: Schema.ObjectId,
	// 	ref: 'User'
	// }
// Jeśli w jakimś schemacie chcemy skorzystać z innego schametu to robimy to w taki sposób jak powyżej
// 'User', to tutaj to samo co 'Book' w naszym: module.exports =  mongoose.model('Book', BookScehma);