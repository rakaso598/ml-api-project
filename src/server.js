const { exec } = require('child_process');
const path = require('path');

// Python 스크립트 경로 설정
const pythonScript = path.join(__dirname, 'convert_model.py');

// Python 스크립트를 실행하는 함수
function trainAndConvertModel() {
    return new Promise((resolve, reject) => {
        exec(`python3 ${pythonScript}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                reject(stderr);
            } else {
                console.log(`Output: ${stdout}`);
                resolve(stdout);
            }
        });
    });
}

// 서버가 시작될 때 Python 스크립트 실행 (원할 경우)
trainAndConvertModel()
    .then(() => console.log('Model trained and converted successfully.'))
    .catch((error) => console.error('Failed to train and convert model:', error));
