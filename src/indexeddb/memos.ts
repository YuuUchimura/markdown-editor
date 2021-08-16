import Dexie from "dexie";

export interface MemoRecord {
  datetime: string;
  title: string;
  text: string;
}

const database = new Dexie("markdown-editor");
database.version(1).stores({ memos: "&datetime" });
const memos: Dexie.Table<MemoRecord, string> = database.table("memos");

export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString();
  await memos.put({ datetime, title, text });
};

// テキスト履歴を取得する関数
// 戻り値は配列なのでMemoRecordの末尾に[]をつける
export const getMemos = (): Promise<MemoRecord[]> => {
  // memosテーブルからデータを取得する処理
  // orderByでdatetime(保存した日時)の昇順を取得
  // reverseで並び順を逆にする
  // toArrayで取得したデータを配列にする
  return memos.orderBy("datetime").reverse().toArray();
};
