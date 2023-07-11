let canvas = document.getElementById('pixelArt');
let ctx = canvas.getContext('2d');

// 픽셀 크기
let pixelSize = 20;

// 픽셀 색상을 나타내는 2차원 배열
// 0은 흰색, 1은 검은색
let pixelData = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
];

// 배열을 순회하면서 캔버스에 픽셀을 그림
for(let y = 0; y < pixelData.length; y++) {
  for(let x = 0; x < pixelData[y].length; x++) {
    // 색상 결정
    ctx.fillStyle = pixelData[y][x] === 0 ? 'white' : 'black';
    
    // 픽셀 그리기
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
  }
}
