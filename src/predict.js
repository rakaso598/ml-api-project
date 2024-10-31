const tf = require('@tensorflow/tfjs-node');
const path = require('path');

let model;

(async () => {
    model = await tf.loadLayersModel(`file://${path.join(__dirname, '../models/cifar10_model/model.json')}`);
    console.log('Model loaded successfully');
})();

const predict = async (req, res) => {
    try {
        const { imageData } = req.body;
        const imageTensor = tf.tensor4d(imageData, [1, 32, 32, 3]);
        const prediction = await model.predict(imageTensor).data();
        res.json({ prediction });
    } catch (error) {
        res.status(500).json({ error: 'Prediction failed' });
    }
};

module.exports = predict;
