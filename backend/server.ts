import express, { Request, Response } from 'express';

const app = express();

// ルートハンドラの定義
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// サーバーを起動
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});