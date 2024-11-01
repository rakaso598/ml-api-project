# ml-api-project

**목표**  
TensorFlow.js와 Python을 이용하여 머신러닝 모델을 구축하고, 이를 웹 환경에서 쉽게 사용할 수 있도록 하는 것이 목표입니다.

## 1. 모델 학습 및 평가
- CIFAR-10 데이터셋을 사용하여 이미지 분류 모델을 학습합니다.
- 모델의 성능을 평가하여 정확도를 확인합니다.

## 2. 모델 변환
- Python에서 학습한 TensorFlow 모델을 TensorFlow.js 형식으로 변환합니다.
- 이를 통해 브라우저에서 실시간으로 모델을 실행할 수 있습니다.

## 3. 웹 인터페이스 개발
- TensorFlow.js를 사용하여 웹 페이지에서 이미지 분류 기능을 제공하는 인터페이스를 개발합니다.
- 사용자가 이미지를 업로드하면 모델이 이를 분류해주는 기능을 구현합니다.
---
## numpy의 np.object 사용이 deprecated(사용 중지)
(2024-11-01)
1. TensorFlow.js 업데이트 확인
2. NumPy 다운그레이드
3. TensorFlow.js 소스 코드 수정 (np.object)
4. 새 venv 가상환경에서 다시 시도
#### 결과 : 문제를 해결하지 못했음.
---
## numpy's np.object usage is deprecated
(2024-11-01)
1. Check TensorFlow.js update
2. Downgrade NumPy
3. Modify TensorFlow.js source code (np.object)
4. Retry in new venv virtual environment
#### Result: The problem was not solved.
